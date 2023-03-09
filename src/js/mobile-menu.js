(() => {
  const mobileMenuRef = document.querySelector('.js-menu-container');
  const openMenuBtnRef = document.querySelector('.js-open-menu');
  const mobileMenuLinksRef = document.querySelectorAll('.js-mob-nav__link');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtnRef.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenuRef.classList.toggle('is-open');
    openMenuBtnRef.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  const onMobileMenuLinkClick = () => {
    if (mobileMenuLinksRef) {
      mobileMenuLinksRef.forEach(each => {
        each.addEventListener('click', function () {
          toggleMenu();
          // Close the mobile menu
          // mobileMenuRef.classList.remove('is-open');
          // openMenuBtnRef.classList.remove('is-open');
          // openMenuBtnRef.setAttribute('aria-expanded', false);
          bodyScrollLock.enableBodyScroll(document.body);
        });
      });
    }
  };

  onMobileMenuLinkClick();

  openMenuBtnRef.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenuRef.classList.remove('is-open');
    openMenuBtnRef.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
