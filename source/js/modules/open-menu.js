const headerNav = document.querySelector('.head-container');
const navToggle = document.querySelector('.main-nav__toggle');
const body = document.querySelector('body');


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

const menu = document.querySelector('.main-nav');
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target)) {
    headerNav.classList.add('is-closed');
    headerNav.classList.remove('is-opened');
    body.classList.remove('scroll-lock');
  }
});

export {onNavToggle};
