function initTabNav(){

const tabMenu = document.querySelectorAll('.js-tabMenu li');
const tabContent = document.querySelectorAll('.js-tabContent section');
if(tabMenu.length && tabContent.length){
tabContent[0].classList.add('active');

function activeTab (index) {
  tabContent.forEach((section) => {
    section.classList.remove('active');
  });
tabContent[index].classList.add('active');
}

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  });
});
}
}
initTabNav();

function initAccordion() {
const accordionList = document.querySelectorAll('.js-Accordion dt');
const activeClass= 'active';

if(accordionList.length) {
accordionList[0].classList.add('activeClass');
accordionList[0].nextElementSibling.classList.add('activeClass');


function activeAccordion() {
  this.classList.toggle('activeClass');
  this.nextElementSibling.classList.toggle('activeClass');
}

accordionList.forEach((item) => { 
  item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave (){
const internalLinks = document.querySelectorAll ('.js-Menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior:'smooth',
   block:'start' ,
  });

}

internalLinks.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});
}

initScrollSuave();

function initAnimationScroll(){
const sections =document.querySelectorAll('.js-Scroll');
if(sections.length) {
  const windowHalf = window.innerHeight *0.6;

function animaScroll () {
  sections.forEach ((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = (sectionTop - windowHalf) < 0 ;
    if(isSectionVisible)
    section.classList.add('active');
    else 
    section.classList.remove('active');
  })
}
animaScroll();

window.addEventListener('scroll', animaScroll);}}

initAnimationScroll();