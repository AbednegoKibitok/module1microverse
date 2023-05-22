const btn = document.querySelector('#navbutton');
const headline = document.querySelector('#headline');
const myProjects = document.querySelector('.works');
const contactForm = document.querySelector('.bgc');
const navLinks = document.querySelector('.navlinks');
const myBlur = document.querySelector('#headlin');
const closeBtn = document.querySelector('#closebtn');

btn.addEventListener('click', () => {
  headline.setAttribute('style', 'background: #6070FF; border-radius: 0;');
  myProjects.setAttribute('style', 'display: none;');
  contactForm.setAttribute('style', 'display: none;');
  navLinks.setAttribute('style', 'display: block;');
  myBlur.setAttribute('style', 'filter: blur(8px);');
  btn.setAttribute('style', 'display: none;');
  closeBtn.setAttribute('style', 'display: block;');
});

closeBtn.addEventListener('click', () => {
  headline.setAttribute('style', 'border-radius: 0 0 0 100px / 100px;');
  myProjects.setAttribute('style', 'display: block;');
  contactForm.setAttribute('style', 'display: block;');
  navLinks.setAttribute('style', 'display: block;');
  myBlur.setAttribute('style', 'filter: 0;');
  navLinks.setAttribute('style', 'display: none;');
  btn.setAttribute('style', 'display: block;');
  closeBtn.setAttribute('style', 'display: none;');
});
