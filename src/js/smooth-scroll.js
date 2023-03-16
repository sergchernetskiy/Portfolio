import { refs } from './refs';

if (refs.menuLinks.length > 0) {
  refs.menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
}

// function onMenuLinkClick(e) {
//   e.preventDefault();
//   const menuLink = e.target;

//   if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//     const gotoBlock = document.querySelector(menuLink.dataset.goto);
//     const gotoBlockValue =
//       gotoBlock.getBoundingClientRect().top +
//       window.pageYOffset -
//       refs.header.offsetHeight;

//     window.scrollTo({
//       top: gotoBlockValue,
//       behavior: 'smooth',
//     });
//   }
// }

function onMenuLinkClick(e) {
  const menuLink = e.target;

  if (menuLink.dataset.goto) {
    e.preventDefault();

    const id = menuLink.dataset.goto;
    const gotoBlockValue =
      document.getElementById(id).offsetTop - refs.header.offsetHeight;

    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth',
    });
    menuLink.classList.remove('active');
  }
}

///////////Active nav menu item///////////////

const changeActiveNavMenuItem = targets => {
  const options = {
    threshold: 0.65,
  };
  const onEntry = (entries, observer) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        refs.menuLinks.forEach(menuLink => {
          menuLink.classList.toggle(
            'active',
            target.id === menuLink.dataset.goto
          );
        });
      } else {
        menuLink.classList.remove('active');
      }
    });
  };

  const io = new IntersectionObserver(onEntry, options);

  targets.forEach(target => io.observe(target));
};

changeActiveNavMenuItem(refs.sections);
