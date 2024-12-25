// Navbar Menu Functionality

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.navigation');

    // Initialize mobileNav's default state
    if (!mobileNav.classList.contains('active')) {
        document.body.classList.remove('noscroll');
    }

    menuToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('active');
        document.body.classList.toggle('noscroll');
    });

    // Responsive Menu Items
    if (window.innerWidth < 1079) {
        document.querySelectorAll('.menu-item, .nav-button').forEach(item => {
            item.addEventListener('click', () => {
                mobileNav.classList.toggle('active');
                document.body.classList.remove('noscroll');
            });
        });
    }

    // Header Scroll Animation
    let didScroll;
    let lastScrollTop = 0;
    const delta = 10;
    const navbarHeight = document.querySelector('header').offsetHeight;

    window.addEventListener('scroll', () => {
        didScroll = true;
    });

    setInterval(() => {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        const st = window.scrollY;

        if (Math.abs(lastScrollTop - st) <= delta) return;

        const header = document.querySelector('header');
        if (st > lastScrollTop && st > navbarHeight + 100) {
            // Scroll Down
            header.classList.remove('nav-down');
            header.classList.add('nav-up');
        } else {
            // Scroll Up
            if (st + window.innerHeight < document.documentElement.scrollHeight) {
                header.classList.remove('nav-up');
                header.classList.add('nav-down');
            }
        }

        if (st < delta) {
            header.classList.remove('fixed-header');
        } else {
            header.classList.add('fixed-header');
        }

        lastScrollTop = st;
    }
});
