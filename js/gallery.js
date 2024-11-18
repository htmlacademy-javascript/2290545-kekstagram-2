import {isEscapeKey} from './utils.js';
import {photoArr} from './data.js';
import {CLASSES} from './const.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const likeCount = bigPicture.querySelector('.likes-count');
const commentsNode = bigPicture.querySelector('.social__comment');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentLoader = bigPicture.querySelector('.social__comments-loader');
const commentsCaption = bigPicture.querySelector('.social__caption');
const container = document.querySelector('.pictures');

const onBigPictureCancelClick = () => {
  closeBigPicture();
};

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
};

function closeBigPicture (){
  bigPicture.classList.add(CLASSES.HIDDEN);
  bigPictureCancel.removeEventListener('click', onBigPictureCancelClick);
  document.removeEventListener('keydown', onEscKeydown);

}

export const openBigPicture = (pictureId) => {

  const currentPhoto = photoArr.find((photo) => photo.id === Number(pictureId));
  const commentFragment = document.createDocumentFragment();

  likeCount.textContent = currentPhoto.likes;
  bigPictureImg.src = currentPhoto.url;
  commentCount.innerHTML = '';

  currentPhoto.comments.forEach((comment) => {

    const commentNode = commentsNode.cloneNode(true);

    commentNode.querySelector('.social__picture').src = comment.avatar;
    commentNode.querySelector('.social__picture').alt = comment.name;
    commentNode.querySelector('.social__text').textContent = comment.message;

    commentFragment.appendChild(commentNode);
  });

  commentCount.appendChild(commentFragment);
  commentsCaption.textContent = currentPhoto.description;
  commentCount.classList.add(CLASSES.HIDDEN);
  commentLoader.classList.add(CLASSES.HIDDEN);

  bigPicture.classList.remove(CLASSES.HIDDEN);
  bigPictureCancel.addEventListener('click', onBigPictureCancelClick);
  document.body.classList.add(CLASSES.MODAL_OPEN);
  document.addEventListener('keydown', onEscKeydown);
};

function onContainerClick(evt) {
  const currentPicture = evt.target.closest('.picture');

  if (currentPicture) {
    openBigPicture(currentPicture.dataset.pictureID);
  }
}

export function initGallery() {
  container.addEventListener('click', onContainerClick);
}
