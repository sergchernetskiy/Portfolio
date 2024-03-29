import { refs } from './refs';

const DELAY = 700;
let intervalId = '';

intervalId = setInterval(randomize, DELAY);

function randomize(e) {
  const max = 80;

  refs.triangle.style.top = `${Math.floor(Math.random() * (max + 1))}%`;
  refs.triangle.style.left = `${Math.floor(Math.random() * max + 1)}%`;

  refs.cross.style.top = `${Math.floor(Math.random() * (max + 1))}%`;
  refs.cross.style.left = `${Math.floor(Math.random() * max + 1)}%`;

  refs.circle.style.top = `${Math.floor(Math.random() * (max + 1))}%`;
  refs.circle.style.left = `${Math.floor(Math.random() * max + 1)}%`;
}
