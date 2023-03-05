const refs = {
  triangle: document.querySelector('.hero__triangle'),
  cross: document.querySelector('.hero__cross'),
  circle: document.querySelector('.hero__circle'),
};
const DELAY = 700;
let intervalId = '';

intervalId = setInterval(randomize, DELAY);

function randomize(e) {
  const max = 90;

  refs.triangle.style.top = `${Math.floor(Math.random() * (max + 1))}%`;
  refs.triangle.style.left = `${Math.floor(Math.random() * max + 1)}%`;

  refs.cross.style.top = `${Math.floor(Math.random() * (max + 1))}%`;
  refs.cross.style.left = `${Math.floor(Math.random() * max + 1)}%`;

  refs.circle.style.top = `${Math.floor(Math.random() * (max + 1))}%`;
  refs.circle.style.left = `${Math.floor(Math.random() * max + 1)}%`;
}
