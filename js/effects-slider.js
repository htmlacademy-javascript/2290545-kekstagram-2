import {CLASSES, EFFECT_LEVEL_MAX, effects, styleFilterByEffects} from './const.js';


const getEffectSelector = (currentInputId) => {
  const selectors = {
    'effect-none': 'effect_preview--none',
    'effect-chrome': 'effect_preview--chrome',
    'effect-sepia': 'effect_preview--sepia',
    'effect-marvin': 'effect_preview--marvin',
    'effect-phobos': 'effect_preview--phobos',
    'effect-heat': 'effect_preview--heat',
  };
  return selectors[currentInputId];
};

const form = document.querySelector('.img-upload__form');
const img = form.querySelector('.img-upload__preview');
const slider = form.querySelector('.effect-level__slider');
const effectLevel = form.querySelector('.img-upload__effect-level');
const effectLevelInput = form.querySelector('.effect-level__value');
effectLevelInput.value = EFFECT_LEVEL_MAX;
const selectorImg = img.classList;
const effectRadioBtn = document.querySelectorAll('.effects__radio');

const getUpdateSliderOptions = (effect, sliderElement) =>
  sliderElement.noUiSlider.updateOptions(effects[effect]);


export const resetFilter = () => {
  img.style.removeProperty('filter');
  effectLevel.classList.add(CLASSES.HIDDEN);
  img.classList.replace(selectorImg, 'effect__preview--none');
};

export const onEffectRadioBtnClick = (evt) => {
  const currentRadioBtn = evt.target.closest('.effects__radio');
  if (currentRadioBtn) {
    const effectBtnValue = currentRadioBtn.value;
    img.classList.replace(selectorImg, getEffectSelector(effectBtnValue));
    getUpdateSliderOptions(effectBtnValue, slider);
  }
};

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

slider.noUiSlider.on('update', () => {
  effectLevelInput.value = slider.noUiSlider.get();
  effectRadioBtn.forEach((item) => {
    if(item.checked) {
      if (item.value !== 'none') {
        effectLevel.classList.remove(CLASSES.HIDDEN);
        img.style.filter = styleFilterByEffects[item.value](effectLevelInput.value);
      } else {
        resetFilter();
      }
    }
  });
});
