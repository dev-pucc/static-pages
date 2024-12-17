const divisionsToggle = document.getElementById('divisions-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
const arrowIcon = document.getElementById('arrow-icon');

divisionsToggle.addEventListener('click', function(e) {
    e.preventDefault();
    dropdownMenu.classList.toggle('hidden');
    arrowIcon.classList.toggle('rotate-180');
});

const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

mobileMenuToggle.addEventListener('click', function() {
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
    }
});
