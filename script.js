const btn = document.querySelector('#navv');
const bgr = document.querySelector('#headline');
const dspl = document.querySelector('#none');
const dspls = document.querySelector('.bgc');
btn.addEventListener('click', () => {
    bgr.setAttribute('style', 'background: #6070FF; border-radius: 0; mix-blend-mode: multiply; filter: blur(8px);');
    dspl.setAttribute('style', 'display: none;');
    dspls.setAttribute('style', 'display: none;');
});