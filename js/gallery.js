import './thumbnails.js';
import {arr} from './main';
import {isEscapeKey} from './utils.js';
import {isEnterKey} from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const likeCount = bigPicture.querySelector('.likes-count');
const commentsNode = bigPicture.querySelector('.social__comment');
const commentTemplate = commentsNode.querySelector('.social__comment');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentLoader = bigPicture.querySelector('.social__comments-loader');
const commentsCaption = bigPicture.querySelector('social__caption');

const onBigPictureCancelClick = () => {
  closeBigPicture();
};

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
};

const closeBigPicture = ()=> {
  bigPicture.classList.add('hidden');
  bigPictureCancel.removeEventListener('click', onBigPictureCancelClick);
  document.removeEventListener('keydown', onEscKeydown);

};

export const openBigPicture = (pictureId)=> {
  const currentPhoto = arr.find((photo) => photo.id === Number(pictureId));
  const commentFragment = document.createDocumentFragment();

  likeCount.textContent = currentPhoto.likes;
  bigPictureImg.src = currentPhoto.url;
  commentCount.innerHTML = '';

  currentPhoto.comments.forEach((comment) => {
    const commentNode = commentTemplate.cloneNode(true);

    commentNode.querySelector('.social__picture').src = comment.avatar;
    commentNode.querySelector('.social__picture').alt = comment.name;
    commentNode.querySelector('.social__text').textContent = comment.message;

    commentFragment.appendChild(commentNode);
  });

  commentCount.appendChild(commentFragment);
  commentsCaption.textContent = currentPhoto.description;
  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');

  bigPicture.classList.remove('hidden');
  bigPictureCancel.addEventListener('click', onBigPictureCancelClick);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
};
