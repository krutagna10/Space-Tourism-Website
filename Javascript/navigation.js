const mainNavLinks = document.querySelectorAll('.main-nav-link');

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
let mobileNavigationButton = document.querySelector('.mobile-navigation-button');

mobileNavigationButton.addEventListener('click', () => {
    document.querySelector('.primary-header').classList.toggle('navigation-open');
    mobileNavigationButton.classList.toggle('active');
})

