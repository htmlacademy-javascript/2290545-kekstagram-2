import {createPhoto} from './data.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.picture');


createPhoto.forEach((photo) => {
  const thumbnail = template.cloneNode(true);

  const image = document.querySelector('.picture__img');
  image.src = photo.url;
  image.alt = photo.description;

  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;

  container.appendChild(template);

});

