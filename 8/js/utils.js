export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  let previousResult = -1;
  return () => {
    const result = Math.floor(Math.random() * (upper - lower + 1) + lower);
    if (previousResult !== result) {
      previousResult = result;
      return result;
    }
    return result === upper ? lower : result + 1;
  };
};
export const isEscapeKey = (evt) => evt.key === 'Escape';

export const hasDuplicates = (inputItems) => new Set(inputItems).size !== inputItems.length;

export const getEffectSelector = (currentInputId) => {
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

