const btn = document.querySelector('#navv');
const bgr = document.querySelector('#headline');
const dspl = document.querySelector('#none');
const dspls = document.querySelector('.bgc');
const heading = document.querySelector('.headline');
const clsbtn = document.querySelector('.closebtn');
const menuItems = document.querySelector('.menu');

btn.addEventListener('click', () => {
    menuItems.setAttribute('style', 'display: block;');
    bgr.setAttribute('style', 'background: #6070FF; border-radius: 0; mix-blend-mode: multiply;');
    heading.setAttribute('style', 'filter: blur(8px)')
    dspl.setAttribute('style', 'display: none;');
    dspls.setAttribute('style', 'display: none;');
});

clsbtn.addEventListener('click', () => {
    menuItems.setAttribute('style', 'display: none;');
    bgr.setAttribute('style', 'display: block;')
    heading.setAttribute('style', 'filter: none')
    dspl.setAttribute('style', 'display: block;');
    dspls.setAttribute('style', 'display: block;');
});
