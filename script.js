const btn = document.querySelector('#navv');
const bgr = document.querySelector('#headline');
btn.addEventListener('click', () => {
    bgr.setAttribute(
        'style',
         'background: #6070FF; border-radius: 0; mix-blend-mode: multiply; filter: blur(8px);'
        );
});