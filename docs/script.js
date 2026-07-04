gsap.registerPlugin(ScrollTrigger);

const horizontalWrapper = document.getElementById("h-wrapper");
const section = document.getElementById("services-horizontal");
const progressFill = document.getElementById("progressFill");
let horizontalTween = null;

function initHorizontalScroll() {
    if (!horizontalWrapper || !section || !progressFill || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        return;
    }

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (horizontalTween) {
        horizontalTween.scrollTrigger && horizontalTween.scrollTrigger.kill();
        horizontalTween.kill();
        horizontalTween = null;
    }

    gsap.set(horizontalWrapper, { x: 0 });

    if (!isDesktop) {
        progressFill.style.width = "0%";
        return;
    }

    const totalWidth = horizontalWrapper.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth;

    if (scrollDistance <= 0) {
        progressFill.style.width = "0%";
        return;
    }

    horizontalTween = gsap.to(horizontalWrapper, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                progressFill.style.width = (self.progress * 100) + "%";
            }
        }
    });
}

// Initialize on load and refresh on resize
window.addEventListener("load", () => {
    initHorizontalScroll();
    requestAnimationFrame(() => ScrollTrigger.refresh());
});

let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        initHorizontalScroll();
        ScrollTrigger.refresh();
    }, 150);
});

window.addEventListener("load", () => {
    if (document.querySelector("#timeline-container")) {
        setTimeout(() => ScrollTrigger.refresh(), 300);
    }
});

window.addEventListener("load", () => {
    if (document.querySelector("#services-horizontal")) {
        setTimeout(() => {
            initHorizontalScroll();
            ScrollTrigger.refresh();
        }, 500);
    }
});

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let mouse = { x: -1000, y: -1000 };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector(".hero-section").offsetHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 0.5;
        this.baseColor = Math.random() > 0.5 ? "139, 197, 232" : "74, 144, 226";
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
            this.x -= dx * 0.02;
            this.y -= dy * 0.02;
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.baseColor}, 0.8)`;
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const count = Math.min(100, Math.floor(canvas.width * canvas.height / 12000));
    for (let i = 0; i < count; i++) particles.push(new Particle());
}
initParticles();

function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(74, 144, 226, ${0.2 * (1 - dist / 140)})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    requestAnimationFrame(animateParticles);
}
animateParticles();

const heroSection = document.querySelector(".hero-section");
const mouseGlow = document.getElementById("mouseGlow");
heroSection.addEventListener("mousemove", (e) => {
    const rect = heroSection.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;

    mouseGlow.style.left = mouse.x + "px";
    mouseGlow.style.top = mouse.y + "px";
});
heroSection.addEventListener("mouseleave", () => {
    mouse.x = -1000;
    mouse.y = -1000;
});

const loaderCount = document.getElementById("loaderCount");
const loaderFill = document.getElementById("loaderFill");
const loader = document.getElementById("loader");

const counterObj = { val: 0 };

gsap.to(counterObj, {
    val: 100,
    duration: 1.6,
    ease: "power2.inOut",
    onUpdate: () => {
        const val = Math.round(counterObj.val);
        loaderCount.textContent = val;
        loaderFill.style.width = val + "%";
    },
    onComplete: () => {
        gsap.to(loader, {
            opacity: 0,
            duration: 0.45,
            ease: "power2.out",
            onComplete: () => {
                loader.style.display = "none";
                playHeroAnimations();
            }
        });
    }
});

function playHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.to("#heroBadge", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        onStart: () => { gsap.set("#heroBadge", { y: 30 }); }
    })
        .to(".word-inner", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.04
        }, "-=0.28")
        .to("#heroParagraph", {
            opacity: 1,
            y: 0,
            duration: 0.7,
            onStart: () => { gsap.set("#heroParagraph", { y: 30 }); }
        }, "-=0.45")
        .to("#heroCta", {
            opacity: 1,
            y: 0,
            duration: 0.65,
            onStart: () => { gsap.set("#heroCta", { y: 30, scale: 0.9 }); }
        }, "-=0.35")
        .to("#scrollIndicator", {
            opacity: 1,
            duration: 0.55,
        }, "-=0.3");
}

// Section scroll reveal animation
if (document.querySelector(".faq-header")) {
    gsap.from(".faq-header > *", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
            trigger: "#faq",
            start: "top 70%"
        }
    });
}

if (document.querySelector(".faq-item")) {
    gsap.utils.toArray(".faq-item").forEach((item, index) => {
        gsap.fromTo(item, {
            opacity: 0,
            y: 32,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "expo.out",
            delay: index * 0.08,
            immediateRender: false,
            scrollTrigger: {
                trigger: item,
                start: "top 82%",
                once: true
            }
        });
    });
}

// Accordion functionality
const faqItems = document.querySelectorAll(".faq-item");

function openFaqItem(item) {
    const content = item.querySelector(".faq-content");
    item.classList.add("active");
    gsap.set(content, { height: "auto" });
}

function closeFaqItem(item) {
    const content = item.querySelector(".faq-content");
    item.classList.remove("active");
    gsap.to(content, {
        height: 0,
        duration: 0.5,
        ease: "power3.inOut"
    });
}

faqItems.forEach(item => {
    const trigger = item.querySelector("h3");
    const icon = item.querySelector(".faq-icon");
    const content = item.querySelector(".faq-content");

    // Allow click on both the heading and the icon container
    [trigger, icon].forEach(el => {
        if (!el) {
            return;
        }

        el.addEventListener("click", (e) => {
            e.stopPropagation();

            const isActive = item.classList.contains("active");

            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains("active")) {
                    closeFaqItem(otherItem);
                }
            });

            // Toggle current item
            if (isActive) {
                closeFaqItem(item);
            } else {
                item.classList.add("active");
                gsap.set(content, { height: "auto" });
                gsap.from(content, {
                    height: 0,
                    duration: 0.6,
                    ease: "expo.out"
                });
            }
        });
    });
});

if (faqItems.length) {
    openFaqItem(faqItems[0]);
}

// Animate the central line to fill based on scroll progress
if (document.querySelector("#timeline-line")) {
    gsap.to("#timeline-line", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
            trigger: "#timeline-container",
            start: "top 60%",
            end: "bottom 70%",
            scrub: 1
        }
    });
}

// Animate cards fading and sliding in
gsap.utils.toArray(".timeline-card").forEach((card) => {
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        }
    });
});

// Animate dots popping in
gsap.utils.toArray(".timeline-dot").forEach((dot) => {
    gsap.to(dot, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(2)",
        scrollTrigger: {
            trigger: dot,
            start: "top 80%",
        }
    });
});


// Stagger reveal animation for blog cards
gsap.to(".insight-card", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "expo.out",
    scrollTrigger: {
        trigger: "#insights",
        start: "top 75%"
    }
});

// Optional: Animate the header elements
gsap.from("#insights .flex-col", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "expo.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#insights",
        start: "top 80%"
    }
});


// GSAP Header Reveal
gsap.from(".testimonial-header > *", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
    ease: "expo.out",
    scrollTrigger: {
        trigger: "#testimonials",
        start: "top 75%"
    }
});

// Initialize Swiper
const testimonialSwiper = new Swiper(".myTestimonialSwiper", {
    effect: "slide",
    grabCursor: true,
    centeredSlides: false,
    loop: true,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1.5, /* Shows a peek of the next slide on large screens */
            spaceBetween: 40,
        }
    }
});
