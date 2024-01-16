/* Show Menu */
const navMenu = document.querySelector('.nav-container-show');
const navToggle = document.querySelector('.nav-toggle-menu');
const navClose = document.querySelector('.nav-close-menu');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/* Remove Menu */
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/* BG Header */
const blurHeader = () => {
    const header = document.querySelector('.header');
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader);