const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form);

function validateComment (value) {
  return value.length <= 140;
}

pristine.addValidator(
  form.querySelector('#social__footer-text'),
  validateComment,
  'До 140 символов'
);

const hashtag = form.querySelector('#text__hashtags');

function validateHashtag (value) {
  const unit = form.querySelector('#text__hashtags');
  return /^#[a-zа-яё0-9]{1,19}$/i;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  pristine.validate();
});

