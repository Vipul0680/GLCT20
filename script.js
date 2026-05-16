document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('open');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });

    // 2. Initialize Hero Swiper
    const heroElement = document.querySelector('.hero.swiper');
    if (heroElement) {
        const heroSwiper = new Swiper('.hero.swiper', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });
    }

    // 3. Initialize Fixtures Swiper
    const fixturesElement = document.querySelector('.fixtures-swiper');
    let fixturesSwiper;
    if (fixturesElement) {
        fixturesSwiper = new Swiper('.fixtures-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.fix-next',
                prevEl: '.fix-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });
    }

    // 4. Initialize Teams Swiper
    const teamsElement = document.querySelector('.teams-swiper');
    if (teamsElement) {
        const teamsSwiper = new Swiper('.teams-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.team-next',
                prevEl: '.team-prev',
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            },
            speed: 5000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            loop: true,
            allowTouchMove: false, // Smooth marquee usually doesn't allow touch interruption
            freeMode: true,
        });
    }

    // 5. Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(28, 10, 37, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
            navbar.style.padding = '10px 5%';
        } else {
            navbar.style.background = 'rgba(28, 10, 37, 0.85)';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '15px 5%';
        }
    });

    // 6. Tabs toggle logic
    const tabs = document.querySelectorAll('.tab-btn');
    const fixturesContainer = document.getElementById('fixtures-container');
    const resultsComingSoon = document.getElementById('results-coming-soon');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const target = tab.getAttribute('data-target');
            if (target === 'results') {
                fixturesContainer.style.display = 'none';
                resultsComingSoon.style.display = 'block';
            } else {
                fixturesContainer.style.display = 'block';
                resultsComingSoon.style.display = 'none';
                // Trigger swiper update in case it was hidden
                if (fixturesSwiper) fixturesSwiper.update();
            }
        });
    });

    // 7. Scroll Reveal Logic
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load
});
