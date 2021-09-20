'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.burger__btn');
    const menu = document.querySelector('.header-menu');

    menuBtn.addEventListener('click', togleClasses);

    function togleClasses() {
        menuBtn.classList.toggle('burger__btn_active');
        menu.classList.toggle('header-menu_active');
        menuBtn.classList.toggle('burger__btn_rotate');
    }

    window.addEventListener('click', (e) => {
        const isOverflow = e.target.classList;
        if (!isOverflow.contains('header-menu__list') && !isOverflow.contains('burger__line') &&
        !isOverflow.contains('burger__btn') && menu.classList.contains('header-menu_active')) {
            togleClasses();
        }
    });
});