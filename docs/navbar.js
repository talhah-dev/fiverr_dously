const navbar = document.getElementById("navbar");

navbar.innerHTML = `
    <nav class="nav-glass fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4">
        <div class="max-w-7xl mx-auto flex items-center justify-between">

            <a href="./index.html" class="flex items-center gap-3">
                <span class="text-white text-3xl font-bold tracking-wider">Dously</span>
            </a>

            <div class="hidden lg:flex items-center gap-8 text-sm font-medium text-white/80">
                <a href="./index.html" class="nav-link">Home</a>

                <div class="relative group">
                    <a href="./it-support.html" class="nav-link inline-flex items-center gap-2">
                        Services
                        <i
                            class="fas fa-chevron-down text-[10px] transition-transform duration-300 group-hover:rotate-180"></i>
                    </a>

                    <div
                        class="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 opacity-0 pointer-events-none bg-transparent shadow-none backdrop-blur-none transition-all duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                        <div class="rounded-2xl border border-white/10 bg-[#081523]/95 p-3 shadow-2xl backdrop-blur-xl">
                            <a href="./it-support.html"
                                class="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white">
                                IT Support Services <i class="fas fa-arrow-right text-[10px] opacity-50"></i>
                            </a>
                            <a href="./cybersecurity.html"
                                class="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white">
                                Cybersecurity <i class="fas fa-arrow-right text-[10px] opacity-50"></i>
                            </a>
                            <a href="./digital-marketing.html"
                                class="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white">
                                Digital Marketing & Brand <i class="fas fa-arrow-right text-[10px] opacity-50"></i>
                            </a>
                            <a href="./web-development.html"
                                class="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white">
                                Website Dev & Optimisation <i class="fas fa-arrow-right text-[10px] opacity-50"></i>
                            </a>
                            <a href="./smart-solutions.html"
                                class="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white">
                                Smart Solutions <i class="fas fa-arrow-right text-[10px] opacity-50"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <a href="./index.html#about" class="nav-link">About</a>
                <a href="./contact.html" class="nav-link">Contact</a>
            </div>

            <div class="hidden lg:flex items-center gap-4">
                <a href="./contact.html"
                    class="cta-btn text-white px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2">
                    Book a Demo
                    <i class="fas fa-arrow-right text-xs"></i>
                </a>
            </div>

            <button id="menuToggle" class="lg:hidden text-white text-2xl z-50 focus:outline-none">
                <i class="fas fa-bars" id="menuIcon"></i>
            </button>
        </div>
    </nav>

    <div id="mobileMenu"
        class="lg:hidden fixed top-0 right-0 h-screen w-full sm:w-80 bg-[#0A1A2F]/98 backdrop-blur-xl border-l border-[#4A90E2]/20 z-40 pt-24 px-6">
        <div class="flex flex-col gap-1 text-lg text-white/80 font-medium">
            <a href="./index.html" class="mobile-link py-4 px-4 rounded-lg flex items-center justify-between">
                Home <i class="fas fa-chevron-right text-xs opacity-50"></i>
            </a>
            <a href="./it-support.html" class="mobile-link py-4 px-4 rounded-lg flex items-center justify-between">
                IT Support Services <i class="fas fa-chevron-right text-xs opacity-50"></i>
            </a>
            <a href="./cybersecurity.html" class="mobile-link py-4 px-4 rounded-lg flex items-center justify-between">
                Cybersecurity <i class="fas fa-chevron-right text-xs opacity-50"></i>
            </a>
            <a href="./digital-marketing.html" class="mobile-link py-4 px-4 rounded-lg flex items-center justify-between">
                Digital Marketing & Brand <i class="fas fa-chevron-right text-xs opacity-50"></i>
            </a>
            <a href="./web-development.html" class="mobile-link py-4 px-4 rounded-lg flex items-center justify-between">
                Website Dev & Optimisation <i class="fas fa-chevron-right text-xs opacity-50"></i>
            </a>
            <a href="./smart-solutions.html" class="mobile-link py-4 px-4 rounded-lg flex items-center justify-between">
                Smart Solutions <i class="fas fa-chevron-right text-xs opacity-50"></i>
            </a>
            <a href="./index.html#about" class="mobile-link py-4 px-4 rounded-lg flex items-center justify-between">
                About - Our Team <i class="fas fa-chevron-right text-xs opacity-50"></i>
            </a>
            <a href="./contact.html" class="mobile-link py-4 px-4 rounded-lg flex items-center justify-between">
                Contact <i class="fas fa-chevron-right text-xs opacity-50"></i>
            </a>

            <div class="mt-8">
                <a href="./contact.html"
                    class="cta-btn w-full justify-center text-white px-6 py-4 rounded-full text-base font-semibold flex items-center gap-2">
                    Book a Demo
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>
`

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");
let menuOpen = false;

if (menuToggle && mobileMenu && menuIcon && typeof gsap !== "undefined") {
    gsap.set(mobileMenu, { x: "100%" });

    menuToggle.addEventListener("click", () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
            mobileMenu.style.display = "block";
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-times");
            gsap.to(mobileMenu, { x: "0%", duration: 0.5, ease: "expo.out" });
            gsap.fromTo(".mobile-link",
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: "power2.out", delay: 0.1 }
            );
        } else {
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
            gsap.to(mobileMenu, {
                x: "100%", duration: 0.5, ease: "expo.in", onComplete: () => {
                    if (!menuOpen) mobileMenu.style.display = "none";
                }
            });
        }
    });
}
