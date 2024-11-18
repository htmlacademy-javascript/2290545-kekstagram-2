import {SCALE_STEP} from './const.js';

const form = document.querySelector('.img-upload__form');
const img = form.querySelector('.effects__preview');
const bigger = form.querySelector('.scale__control--bigger');
const smaller = form.querySelector('.scale__control--smaller');
const scaleControl = form.querySelector('.scale__control--value');
console.log(img);

let scale = 1;

const onSmallerClick = () => {
  if (scale > SCALE_STEP) {
    img.style.transform = `scale(${scale -= SCALE_STEP})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

const onBiggerClick = () => {
  if (scale < 1) {
    img.style.transform = `scale(${scale += SCALE_STEP})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

export function initScale () {
  bigger.addEventListener('click', onBiggerClick);
  smaller.addEventListener('click', onSmallerClick);
}

