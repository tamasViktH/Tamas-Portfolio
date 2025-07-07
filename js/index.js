const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    document.body.style.overflow = document.body.classList.contains('nav-open') ? 'hidden' : 'auto';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        document.body.style.overflow = 'auto';
    });
});
