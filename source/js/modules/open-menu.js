const headerNav = document.querySelector('.head-container');
const navToggle = document.querySelector('.main-nav__toggle');
const body = document.querySelector('body');
const menu = document.querySelector('.main-nav');
const menuLinks = document.querySelectorAll('[data-menu-link]');

const onNavToggle = ()=> {
  if (headerNav) {
    headerNav.classList.remove('no-js');

    navToggle.addEventListener('click', () => {
      if (headerNav.classList.contains('is-closed')) {
        headerNav.classList.remove('is-closed');
        headerNav.classList.add('is-opened');
        body.classList.add('scroll-lock');
      } else {
        headerNav.classList.add('is-closed');
        headerNav.classList.remove('is-opened');
        body.classList.remove('scroll-lock');
      }
    });
  }
};

const closeMenu = () => {
  headerNav.classList.add('is-closed');
  headerNav.classList.remove('is-opened');
  body.classList.remove('scroll-lock');
};

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target)) {
    closeMenu();
  }
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});

export {onNavToggle};
