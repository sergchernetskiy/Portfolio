import { refs } from './refs';

(() => {
  const toggleMenu = () => {
    const isMenuOpen =
      refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    refs.mobileMenu.classList.toggle('is-open');
    refs.openMenuBtn.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  const onMobileMenuLinkClick = () => {
    if (refs.mobileMenuLinks) {
      refs.mobileMenuLinks.forEach(each => {
        each.addEventListener('click', function () {
          toggleMenu();
          // Close the mobile menu
          refs.mobileMenu.classList.remove('is-open');
          refs.openMenuBtn.classList.remove('is-open');
          refs.openMenuBtn.setAttribute('aria-expanded', false);
          bodyScrollLock.enableBodyScroll(document.body);
        });
      });
    }
  };

  onMobileMenuLinkClick();

  refs.openMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    refs.mobileMenuLinks.classList.remove('is-open');
    refs.openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
