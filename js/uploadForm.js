import {isEscapeKey} from './utils.js';

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
  ERROR: 'img-upload__field-wrapper--error'
};

const VALIDATION_RULES = {
  HASHTAG_PATTERN: /^#[a-zа-яё0-9]{1,19}$/i,
  MAX_COMMENT_LENGTH: 140
};

const PRISTINE_CONFIG = {
  classTo: 'img-upload__field-wrapper',
  errorClass: CLASSES.ERROR,
  errorTextParent: 'img-upload__field-wrapper'
};

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

export const initUploadModal = () => {
  uploadFile.addEventListener('change', () => {
    editorForm.classList.remove(CLASSES.HIDDEN);
    pageBody.classList.add(CLASSES.MODAL_OPEN);
    editorReset.addEventListener('click', onEditorReset);
  });
};

const pristine = new Pristine(form, {PRISTINE_CONFIG});

pristine.addValidator(hashtagInput, (value) =>VALIDATION_RULES.HASHTAG_PATTERN.test(value));

pristine.addValidator(commentInput, (value) => value.length <= VALIDATION_RULES.MAX_COMMENT_LENGTH);

