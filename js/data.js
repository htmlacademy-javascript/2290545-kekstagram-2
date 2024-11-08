import {getRandomInteger} from './utils.js';

export const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

export const NAMES = ['Егор', 'Иван', 'Василий', 'Александр', 'Дарья', 'Мария', 'Петр', 'Наталья', 'Дмитрий', 'Михаил',];

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const ARRAY_LENGTH = 25;

export const createComment = () => {
  let id = 1;
  const indexMessageArr = getRandomInteger(0, MESSAGES.length - 1);
  const indexNameArr = getRandomInteger(0, NAMES.length - 1);

  return () => {
    const comment = {};
    const idAvatar = getRandomInteger(1, 6);
    comment.id = id;
    comment.avatar = `img/avatar-${idAvatar()}.svg`;
    comment.message = `${MESSAGES[indexMessageArr()]}. ${MESSAGES[indexMessageArr()]}`;
    comment.name = `${NAMES[indexNameArr()]}`;
    id++;
    return comment;
  };
};

const numComments = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);

const numLikes = getRandomInteger(MIN_LIKES, MAX_LIKES);

const createPhoto = () => {
  let id = 1;
  return () => {
    const photo = {};
    photo.id = id;
    photo.url = `photos/${id}.jpg`;
    photo.description = `Фото №${id}`;
    photo.likes = numLikes();
    photo.comments = Array.from({length: numComments()}, createComment());
    id++;
    return photo;
  };
};

export const getPhotoArray = () => Array.from({length: ARRAY_LENGTH}, createPhoto());
console.log(getPhotoArray());

export const photoArr = getPhotoArray();


