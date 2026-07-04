const footer = document.getElementById("footer")

footer.innerHTML = `
    <footer id="premium-footer" class="relative bg-[#0A1A2F] text-white pt-14 pb-12 px-6 lg:px-12 overflow-hidden">
        <div class="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#4A90E2]/10 blur-[150px] pointer-events-none">
        </div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[150px] pointer-events-none">
        </div>

        <div class="max-w-7xl mx-auto relative z-10">

            <!-- Top CTA Banner -->
            <div
                class="footer-cta relative bg-gradient-to-r from-[#0F2847] to-[#0A1A2F] border border-white/10 rounded-3xl p-10 lg:p-14 md:mb-24 mb-10 overflow-hidden shadow-2xl">
                <div class="absolute top-0 right-0 w-64 h-64 bg-[#4A90E2]/20 blur-[80px]"></div>
                <div class="relative flex flex-col lg:flex-row items-center justify-between gap-8 z-10">
                    <div class="text-center lg:text-left">
                        <h2 class="text-3xl lg:text-4xl font-bold tracking-tight mb-3">
                            Ready to scale globally?
                        </h2>
                        <p class="text-white/60 text-lg max-w-xl">
                            Let's design operational systems that make your organization faster, leaner, and more
                            competitive.
                        </p>
                    </div>
                    <a href="#"
                        class="flex-shrink-0 inline-flex items-center gap-3 bg-gradient-to-r from-[#4A90E2] to-[#2E6FBE] text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/60 hover:-translate-y-1 transition-all duration-300">
                        Book a Demo
                        <i class="fas fa-arrow-right text-sm"></i>
                    </a>
                </div>
            </div>

            <!-- Main Footer Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

                <!-- Brand & Description -->
                <div class="lg:col-span-4 footer-col">
                    <a href="#" class="flex items-center gap-3 mb-6">
                        <span class="text-3xl font-extrabold tracking-wider text-white">Dously</span>
                    </a>
                    <p class="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
                        A global technology services firm partnering with organisations to design, build and operate
                        digital systems.
                    </p>
                    <div class="flex items-center gap-4">
                        <a href="#"
                            class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#4A90E2] hover:text-white hover:border-transparent transition-all duration-300">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#4A90E2] hover:text-white hover:border-transparent transition-all duration-300">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#4A90E2] hover:text-white hover:border-transparent transition-all duration-300">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#4A90E2] hover:text-white hover:border-transparent transition-all duration-300">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <!-- Services Links -->
                <div class="lg:col-span-2 footer-col">
                    <h4 class="text-sm font-bold uppercase tracking-wider text-white mb-6">Services</h4>
                    <ul class="space-y-4 text-sm">
                        <li><a href="#" class="footer-link text-white/60 hover:text-white transition-colors">IT
                                Support</a></li>
                        <li><a href="#"
                                class="footer-link text-white/60 hover:text-white transition-colors">Cybersecurity</a>
                        </li>
                        <li><a href="#" class="footer-link text-white/60 hover:text-white transition-colors">Smart
                                Solutions</a></li>
                        <li><a href="#" class="footer-link text-white/60 hover:text-white transition-colors">Digital
                                Marketing</a></li>
                        <li><a href="#" class="footer-link text-white/60 hover:text-white transition-colors">Web
                                Development</a></li>
                    </ul>
                </div>

                <!-- Company Links -->
                <div class="lg:col-span-2 footer-col">
                    <h4 class="text-sm font-bold uppercase tracking-wider text-white mb-6">Company</h4>
                    <ul class="space-y-4 text-sm">
                        <li><a href="#" class="footer-link text-white/60 hover:text-white transition-all ">About
                                Us</a></li>
                        <li><a href="#" class="footer-link text-white/60 hover:text-white transition-colors">Our
                                Team</a></li>
                        <li><a href="#" class="footer-link text-white/60 hover:text-white transition-colors">Careers</a>
                        </li>
                        <li><a href="#" class="footer-link text-white/60 hover:text-white transition-colors">Contact</a>
                        </li>
                        <li><a href="#" class="footer-link text-white/60 hover:text-white transition-colors">FAQ</a>
                        </li>
                    </ul>
                </div>

                <!-- Newsletter / Contact -->
                <div class="lg:col-span-4 footer-col">
                    <h4 class="text-sm font-bold uppercase tracking-wider text-white mb-6">Stay Updated</h4>
                    <p class="text-white/50 text-sm mb-5">Subscribe to our newsletter for insights on tech and
                        operations.</p>
                    <form class="flex flex-col sm:flex-row gap-3 mb-8">
                        <input type="email" placeholder="Enter your email"
                            class="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#4A90E2] transition-colors">
                        <button type="button"
                            class="bg-[#D4AF37] text-[#0A1A2F] font-semibold rounded-full px-6 py-3 text-sm hover:bg-[#F4D87E] transition-all duration-300 flex items-center justify-center gap-2">
                            Subscribe <i class="fas fa-paper-plane text-xs"></i>
                        </button>
                    </form>
                    <div class="flex items-center gap-3 text-sm text-white/60">
                        <i class="fas fa-headset text-[#4A90E2]"></i>
                        <span>24/7 Enterprise Support: +1 (555) 000-0000</span>
                    </div>
                </div>

            </div>

            <!-- Bottom Bar -->
            <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <p class="text-sm text-white/40">© 2024 Dously Compliance. All rights reserved.</p>
                <div class="flex items-center gap-6 text-sm text-white/40">
                    <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" class="hover:text-white transition-colors">Cookies</a>
                </div>
                <button id="backToTop"
                    class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#4A90E2] hover:border-transparent hover:text-white transition-all duration-300">
                    <i class="fas fa-arrow-up text-sm"></i>
                </button>
            </div>
        </div>
    </footer>`

if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    if (document.querySelector(".footer-col")) {
        gsap.from(".footer-col", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.15,
            ease: "expo.out",
            scrollTrigger: {
                trigger: "#premium-footer",
                start: "top 85%"
            }
        });
    }

    if (document.querySelector(".footer-cta")) {
        gsap.from(".footer-cta", {
            opacity: 0,
            scale: 0.95,
            y: 60,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
                trigger: "#premium-footer",
                start: "top 90%"
            }
        });
    }
}

const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
