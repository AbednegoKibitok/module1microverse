const btn = document.querySelector('#navbutton');
const headline = document.querySelector('#headline');
const myProjects = document.querySelector('.works');
const contactForm = document.querySelector('.bgc');
const navLinks = document.querySelector('.navlinks');
const myBlur = document.querySelector('.scti');
const closeBtn = document.querySelector('#closebtn');
const navLinks1 = document.querySelector('.navlinks1');
const navLinks2 = document.querySelector('.navlinks2');
const navLinks3 = document.querySelector('.navlinks3');
const heading = document.querySelector('.heading');

btn.addEventListener('click', () => {
  headline.setAttribute('style', 'background: #6070FF; border-radius: 0;');
  myProjects.setAttribute('style', 'display: none;');
  contactForm.setAttribute('style', 'display: none;');
  navLinks.setAttribute('style', 'display: block;');
  myBlur.setAttribute('style', 'filter: blur(8px);');
  btn.setAttribute('style', 'display: none;');
  closeBtn.setAttribute('style', 'display: block;');
  heading.setAttribute('style', 'visibility: hidden;');
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

navLinks1.addEventListener('click', () => {
  headline.setAttribute('style', 'border-radius: 0 0 0 100px / 100px;');
  myProjects.setAttribute('style', 'display: block;');
  contactForm.setAttribute('style', 'display: block;');
  navLinks.setAttribute('style', 'display: block;');
  myBlur.setAttribute('style', 'filter: 0;');
  navLinks.setAttribute('style', 'display: none;');
  btn.setAttribute('style', 'display: block;');
  closeBtn.setAttribute('style', 'display: none;');
  heading.setAttribute('style', 'visibility: visible;');
});

navLinks2.addEventListener('click', () => {
  headline.setAttribute('style', 'border-radius: 0 0 0 100px / 100px;');
  myProjects.setAttribute('style', 'display: block;');
  contactForm.setAttribute('style', 'display: block;');
  navLinks.setAttribute('style', 'display: block;');
  myBlur.setAttribute('style', 'filter: 0;');
  navLinks.setAttribute('style', 'display: none;');
  btn.setAttribute('style', 'display: block;');
  closeBtn.setAttribute('style', 'display: none;');
  heading.setAttribute('style', 'visibility: visible;');
});

navLinks3.addEventListener('click', () => {
  headline.setAttribute('style', 'border-radius: 0 0 0 100px / 100px;');
  myProjects.setAttribute('style', 'display: block;');
  contactForm.setAttribute('style', 'display: block;');
  navLinks.setAttribute('style', 'display: block;');
  myBlur.setAttribute('style', 'filter: 0;');
  navLinks.setAttribute('style', 'display: none;');
  btn.setAttribute('style', 'display: block;');
  closeBtn.setAttribute('style', 'display: none;');
  heading.setAttribute('style', 'visibility: visible;');
});
