const EFFECTS = {
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    effect: 'grayscale',
    start: 0,
    step: 0.1,
    unit: '',
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    effect: 'sepia',
    start: 0,
    step: 0.1,
    unit: '',
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    effect: 'invert',
    start: 0,
    step: 1,
    unit: '%',
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    effect: 'blur',
    start: 0,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    range: {
      min: 1,
      max: 3,
    },
    effect: 'brightness',
    start: 1,
    step: 0.1,
    unit: '',
  },
};

const pictureUploadPreview = document.querySelector('.img-upload__preview img');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const filterUploadEffectLevel = document.querySelector('.effect-level');
const effectRadioInput = document.querySelector('.effects');


const hideSlader = () => {
  filterUploadEffectLevel.classList.add('hidden');
};

const showSlader = () => {
  filterUploadEffectLevel.classList.remove('hidden');
};


noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: (value) => (Number.isInteger(value) ? value : value.toFixed(1)),
    from: (value) => parseFloat(value),
  },
});

effectLevelSlider.noUiSlider.on('update', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
});

effectRadioInput.addEventListener('change', (evt) => {
  const targetEffect = evt.target.value;

  if (targetEffect === 'none') {
    pictureUploadPreview.className = '';
    hideSlader();
  } else {
    const options = EFFECTS[targetEffect];

    showSlader();
    pictureUploadPreview.className = `effects__preview--${targetEffect}`;
    effectLevelSlider.noUiSlider.updateOptions(options);
    /*pictureUploadPreview.style.filter = `(${options.style}(${effectLevelValue.value}${options.unit}))`;*/
  }
});


export const initEffects = () => {

};
