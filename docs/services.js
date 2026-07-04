(function () {
    var line = document.getElementById('process-line');
    if (!line) return;
    var section = line.closest('section');
    var triggered = false;
    function checkScroll() {
        if (triggered) return;
        var rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7) {
            line.style.width = '66.8%';
            triggered = true;
            window.removeEventListener('scroll', checkScroll);
        }
    }
    window.addEventListener('scroll', checkScroll);
    checkScroll();
})();


gsap.registerPlugin(ScrollTrigger);

// 1. Hero Text Reveal Animation
window.addEventListener('load', () => {
    gsap.to(".word-inner", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.08,
        ease: "expo.out",
        delay: 0.2
    });
});

// 2. Generic Fade-up Animation for all elements with .fade-up
gsap.utils.toArray(".fade-up").forEach((elem) => {
    gsap.to(elem, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
            trigger: elem,
            start: "top 85%",
        }
    });
});

// 3. Process Line Fill Animation
gsap.to("#process-line", {
    width: "100%",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-line-active",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1
    }
});

// 4. Stats Counter Animation
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            let current = 0;
            const step = target / 60;

            const updateCount = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.textContent = target;
                }
            };
            updateCount();
            observer.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));