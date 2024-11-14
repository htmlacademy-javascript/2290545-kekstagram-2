export const EFFECT_LEVEL_MAX = 100;

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
