const scrollChange = 1;
const headerRef = document.querySelector('header');

const addClassOnScroll = () => headerRef.classList.add('header__scrolled');
const removeClassOnScroll = () =>
  headerRef.classList.remove('header__scrolled');

window.addEventListener('scroll', onScroll);

function onScroll() {
  let scrollPos = window.scrollY;

  if (scrollPos >= scrollChange) {
    addClassOnScroll();
  } else {
    removeClassOnScroll();
  }
}
