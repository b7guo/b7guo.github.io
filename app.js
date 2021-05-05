const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const skillMenu = document.querySelector('#skill-page');
  const contactMenu = document.querySelector('#contact-page');
  let scrollPos = window.scrollY;
   console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 768 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 768 && scrollPos < 1250) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    skillMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 768 && scrollPos < 1900) {
    skillMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  }
  else if (window.innerWidth > 768 && scrollPos < 2150) {
    contactMenu.classList.add('highlight');
    skillMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
