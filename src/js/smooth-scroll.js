(() => {
  const menuLinks = document.querySelectorAll('.js-nav__link[data-goto]');

  if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick);
    });
  }

  function onMenuLinkClick(e) {
    const menuLink = e.target;

    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      e.preventDefault();

      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        1 +
        window.pageYOffset -
        document.querySelector('header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
    }
  }
})();
