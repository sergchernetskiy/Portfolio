import { refs } from './refs';

refs.portfolioBtnLink.addEventListener('click', scrollToPortfolioSection);
refs.aboutBtnLink.addEventListener('click', scrollToPortfolioSection);
refs.skillsBtnLink.addEventListener('click', scrollToContactsSection);

function scrollToPortfolioSection() {
  refs.portfolioContainer.scrollIntoView({
    behavior: 'smooth',
  });
}

function scrollToContactsSection() {
  refs.contactsContainer.scrollIntoView({
    behavior: 'smooth',
  });
}
