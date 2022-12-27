const mainNavLinks = document.querySelectorAll('.header__nav-link');

let currentActive = 0;
mainNavLinks.forEach((mainNavLink, index) => {
    mainNavLink.addEventListener('click', () => {
        currentActive = index;
        update();
    })
});

function update() {
    mainNavLinks.forEach((mainNavLink, index) => {
        if (currentActive === index) {
            mainNavLink.classList.add('active');
        } else {
            mainNavLink.classList.remove('active');
        }
    })
}


// Mobile Navigation
const mobileNavToggle = document.querySelector('.header__mobile-nav-toggle');
const header = document.querySelector('.header');

mobileNavToggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
});

