import {getPhotoArray} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import {openBigPicture} from './gallery';


const container = document.querySelector('.pictures');

container.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');

  if (currentPicture) {
    openBigPicture(currentPicture.dataset.pictureID);
  }
});

export const arr = getPhotoArray();
renderThumbnails(arr);


