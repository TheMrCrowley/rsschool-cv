'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.burger-btn');
    const sideBar = document.querySelector('.header-menu');

    menuBtn.addEventListener('click', (e) => {
        if (e.target && (e.target.classList.contains('burger-btn') || e.target.classList.contains('burger-btn__row'))) {
            menuBtn.classList.toggle('burger-btn_active');
            sideBar.classList.toggle('header-menu_active');
        }
    });

    window.addEventListener('click', (e) => {
        if (!e.target.classList.contains('header-menu__list') &&
        !(e.target.classList.contains('burger-btn') || e.target.classList.contains('burger-btn__row'))) {
            menuBtn.classList.toggle('burger-btn_active');
            sideBar.classList.toggle('header-menu_active');
        }
    });
});