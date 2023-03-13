import { refs } from './refs';

const scrollChange = 1;

const addClassOnScroll = () => refs.header.classList.add('header__scrolled');
const removeClassOnScroll = () =>
  refs.header.classList.remove('header__scrolled');

window.addEventListener('scroll', onScroll);

function onScroll() {
  let scrollPos = window.scrollY;

  if (scrollPos >= scrollChange) {
    addClassOnScroll();
  } else {
    removeClassOnScroll();
  }
}
