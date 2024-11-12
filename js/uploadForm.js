import {hasDuplicates, isEscapeKey} from './utils.js';

const form = document.querySelector('.img-upload__form');
const pageBody = document.querySelector('body');
const uploadFile = form.querySelector('#upload-file');
const editorForm = form.querySelector('.img-upload__overlay');
const editorReset = editorForm.querySelector('.img-upload__cancel');
const hashtagInput = form.querySelector('.text__hashtags');
const commentInput = form.querySelector('.text__description');

const CLASSES = {
  HIDDEN: 'hidden',
  MODAL_OPEN: 'modal-open',
  ERROR: 'img-upload__field-wrapper--error',
};

const VALIDATION_RULES = {
  HASHTAG_PATTERN: /^#[a-zа-яё0-9]{1,19}$/i,
  HASHTAGS_MAX: 5,
  HASHTAG_LENGTH_MAX: 20,
  MAX_COMMENT_LENGTH: 140,
};

const PRISTINE_CONFIG = {
  classTo: 'img-upload__field-wrapper',
  errorClass: CLASSES.ERROR,
  errorTextParent: 'img-upload__field-wrapper',
};

let errorText = '';

const validateHashtags = (value) => {
  errorText = '';

  if (value === '') {
    return true;
  }

  const hashtagsString = value.trim().toLowerCase();
  const hashtags = hashtagsString.split(/\s+/).filter(Boolean);

  if (hashtags.length > VALIDATION_RULES.HASHTAGS_MAX) {
    errorText = `Нельзя указать больше ${VALIDATION_RULES.HASHTAGS_MAX} хэштегов`;
    return false;
  }

  if (hasDuplicates(hashtags)) {
    errorText = 'Хэштеги не должны повторяться';
    return false;
  }

  for (const hashtag of hashtags) {
    if (!hashtag.startsWith('#')) {
      errorText = 'Хэштег начинается с символа #';
      return false;
    }
    if (!VALIDATION_RULES.HASHTAG_PATTERN.test(hashtag)) {
      errorText = 'Хэштег должен состоять из букв и чисел';
      return false;
    }
    if (hashtag === '#') {
      errorText = 'Хеш-тег не может состоять только из одной решётки';
      return false;
    }
    if (hashtag.length > VALIDATION_RULES.HASHTAG_LENGTH_MAX) {
      errorText = `Максимальная длина хэштега - ${ VALIDATION_RULES.HASHTAG_LENGTH_MAX } символов`;
      return false;
    }
  }

  return true;
};

const validateDescription = (value) => {
  errorText = '';

  if (value.length > VALIDATION_RULES.MAX_COMMENT_LENGTH) {
    errorText = `Длина комментария не более ${ VALIDATION_RULES.MAX_COMMENT_LENGTH } символов`;
    return false;
  }

  return true;
};

const getErrorText = () => errorText;

const onEditorReset = () => closeEditor();

const shouldCloseEditor = (evt) => isEscapeKey(evt) &&
    !evt.target.classList.contains('text__hashtags') &&
    !evt.target.classList.contains('text__description');

const onDocumentKeydown = (evt) => {
  if (shouldCloseEditor(evt)) {
    evt.preventDefault();
    closeEditor();
  }
};

function closeEditor() {
  editorForm.classList.add(CLASSES.HIDDEN);
  pageBody.classList.remove(CLASSES.MODAL_OPEN);
  document.removeEventListener('keydown', onDocumentKeydown);
  editorReset.removeEventListener('click', onEditorReset);
  uploadFile.value = '';
}


function openEditor() {
  uploadFile.addEventListener('change', () => {
    editorForm.classList.remove(CLASSES.HIDDEN);
    pageBody.classList.add(CLASSES.MODAL_OPEN);
    editorReset.addEventListener('click', onEditorReset);
  });
}

export const initUploadModal = () => openEditor();

const pristine = new Pristine(form, PRISTINE_CONFIG);

pristine.addValidator(hashtagInput, validateHashtags, getErrorText);

pristine.addValidator(commentInput, validateDescription, getErrorText);

