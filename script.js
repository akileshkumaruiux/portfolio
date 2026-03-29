
        const menuToggle = document.getElementById('mobile-menu');
        const navLinks = document.getElementById('nav-list');
        const menuIcon = menuToggle.querySelector('i');
        const allNavLinks = document.querySelectorAll('.nav-link');

        const closeMenu = () => {
            navLinks.classList.remove('active');
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-times');
        }

        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-times');
        });

        allNavLinks.forEach(link => {
            link.addEventListener('click', () => closeMenu());
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                closeMenu();
            }
        });

        function openGmail(e) {
            e.preventDefault();
            window.open("https://mail.google.com/mail/?view=cm&fs=1&to=akileshkumaruiux@gmail.com", "_blank");
        }

        const glow = document.querySelector('.cursor-glow');
        document.addEventListener('mousemove', (e) => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        });

        // GSAP Hero Entrance Animation
        window.addEventListener('load', () => {
            if (typeof gsap !== 'undefined') {
                const tl = gsap.timeline();
                tl.from("nav", { y: -20, opacity: 0, duration: 0.8, ease: "power3.out" })
                  .from(".hero-content .status-pill", { x: -30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
                  .from(".hero-content h1", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.2")
                  .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
                  .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
                  .from(".hero-image img", { scale: 0.8, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
                  .from(".parallax-shape-1", { x: -100, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
                  .from(".parallax-shape-2", { x: 100, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
                  .from(".parallax-shape-3", { scale: 0, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8");
            }
        });

        // GSAP Parallax Effect for Hero Mousemove
        document.addEventListener("mousemove", (e) => {
            if (typeof gsap !== 'undefined') {
                gsap.utils.toArray('.parallax-layer').forEach(layer => {
                    const depth = parseFloat(layer.getAttribute('data-depth'));
                    if(!isNaN(depth)) {
                        const moveX = (e.clientX - window.innerWidth / 2) * depth;
                        const moveY = (e.clientY - window.innerHeight / 2) * depth;
                        gsap.to(layer, {
                            x: moveX,
                            y: moveY,
                            duration: 1,
                            ease: "power3.out"
                        });
                    }
                });
            }
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) entry.target.classList.add('in-view');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.slide-up').forEach(el => observer.observe(el));