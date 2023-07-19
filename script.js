// Modal Settings
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');


// Start (با کلیک بر روی ضربدر صفحه مدل بسته میشود)
// Start (با کلیک کردن بیرون از ـ مدل ـ صفحه مدل بسته میشود)
const modalCloseFunc = function () {
    modal.classList.add('closed');
};

modalCloseOverlay.addEventListener('click', modalCloseFunc);
// End (با کلیک کردن بیرون از ـ مدل ـ صفحه مدل بسته میشود)


modalCloseBtn.addEventListener('click', modalCloseFunc);
// End (با کلیک بر روی ضربدر صفحه مدل بسته میشود)
// Modal Settings



// Menu Bar
let menu = document.querySelector('#menu-icon');
let navMenu = document.querySelector('.nav-menu');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navMenu.classList.toggle('active')
};
// Menu Bar



// Window Scrolling (Hide NavMenu)
window.onscroll = () => {
    
};
// Window Scrolling (Hide NavMenu)



// Scrolling (Move Header & Hide NavMenu)
window.onscroll = () => {

    // Move Header
    if(window.scrollY > 0) {
        document.querySelector('.navbar').classList.add('active');
    } else {
        document.querySelector('.navbar').classList.remove('active');
    }

    // Hide NavMenu
    menu.classList.remove('fa-xmark');
    navMenu.classList.remove('active');

};
// Scrolling (Move Header & Hide NavMenu)



// OnLoad
window.onload = () => {

    if (window.scrollY > 0) {
        document.querySelector('.navbar').classList.add('active');
    } else {
        document.querySelector('.navbar').classList.remove('active');
    }

};
// OnLoad



// About (Set Image)
function functio (small) {
    const full = document.getElementById('image-box');
    full.src = small.src;
}
// About (Set Image)