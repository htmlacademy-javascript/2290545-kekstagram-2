import {isEscapeKey} from './utils.js';

const form = document.querySelector('.img-upload__form');
const pageBody = document.querySelector('body');
const uploadFile = form.querySelector('#upload-file');
const editorForm = form.querySelector('.img-upload__overlay');
const editorReset = editorForm.querySelector('.img-upload__cancel');
const hashtagInput = form.querySelector('.text__hashtags');
const commentInput = form.querySelector('.text__description');

const onEditorReset = () => closeEditor();

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditor();
  }
};

function closeEditor() {
  editorForm.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  editorReset.removeEventListener('click', onEditorReset);
  uploadFile.value = '';
}

export const initUploadModal = () => {
  uploadFile.addEventListener('change', () => {
    editorForm.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    editorReset.addEventListener('click', onEditorReset);
  });
};

// const pristine = new Pristine(form, {
//   classTo: 'img-upload__field-wrapper'
// });

// pristine.addValidator(hashtagInput, (value) => /\d/.test(value));

// function validateComment(value) {
//   return value.length <= 140;
// }
//
// pristine.addValidator(
//   form.querySelector('#social__footer-text'),
//   validateComment,
//   'До 140 символов'
// );
//
//
// function validateHashtag(value) {
//   const unit = form.querySelector('#text__hashtags');
//   return /^#[a-zа-яё0-9]{1,19}$/i;
// }
//
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   pristine.validate();
// });

