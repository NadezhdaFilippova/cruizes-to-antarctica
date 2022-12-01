let headerNav = document.querySelector('.head-container');
let navToggle = document.querySelector('.main-nav__toggle');


const onNavToggle = ()=> {
  if (headerNav) {
    headerNav.classList.remove('no-js');

    navToggle.addEventListener('click', () => {
      if (headerNav.classList.contains('is-closed')) {
        headerNav.classList.remove('is-closed');
        headerNav.classList.add('is-opened');
      } else {
        headerNav.classList.add('is-closed');
        headerNav.classList.remove('is-opened');
      }
    });
  }
};

export {onNavToggle};
