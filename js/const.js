export const EFFECT_LEVEL_MAX = 100;

export const SCALE_STEP = 0.25;

export const CLASSES = {
  HIDDEN: 'hidden',
  MODAL_OPEN: 'modal-open',
  ERROR: 'img-upload__field-wrapper--error',
};

export const VALIDATION_RULES = {
  HASHTAG_PATTERN: /^#[a-zа-яё0-9]{1,19}$/i,
  HASHTAGS_MAX: 5,
  HASHTAG_LENGTH_MAX: 20,
  MAX_COMMENT_LENGTH: 140,
};

export const PRISTINE_CONFIG = {
  classTo: 'img-upload__field-wrapper',
  errorClass: CLASSES.ERROR,
  errorTextParent: 'img-upload__field-wrapper',
};

const objectChromeSepia = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
};

const objectMarvinDefault = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
};

const objectPhobos = {
  range: {
    min: 0,
    max: 3,
  },
  start: 3,
  step: 0.1,
};

const objectHeat = {
  range: {
    min: 1,
    max: 3,
  },
  start: 3,
  step: 0.1,
};

export const effects = {
  none: objectMarvinDefault,
  chrome: objectChromeSepia,
  sepia: objectChromeSepia,
  marvin: objectMarvinDefault,
  phobos: objectPhobos,
  heat: objectHeat,
};

const getChromeStyleFilter = (value) => `grayscale(${value})`;
const getSepiaStyleFilter = (value) => `sepia(${value})`;
const getMarvinStyleFilter = (value) => `invert(${value}%)`;
const getPhobosStyleFilter = (value) => `blur(${value}px)`;
const getHeatStyleFilter = (value) => `brightness(${value})`;

export const styleFilterByEffects = {
  chrome: getChromeStyleFilter,
  sepia: getSepiaStyleFilter,
  marvin: getMarvinStyleFilter,
  phobos: getPhobosStyleFilter,
  heat: getHeatStyleFilter,
};
