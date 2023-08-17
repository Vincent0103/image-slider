function setActiveDot(dotsContainer, dotToActive) {
  dotsContainer.forEach((container) => {
    if (container.classList.contains('btn-active')) {
      container.classList.remove('btn-active');
    }
  });
  dotToActive.classList.add('btn-active');
}

function getDotToActive(direction) {
  const imgsDotsContainer = document.querySelector('.imgs-dots-container');
  const activeDotId = parseInt(imgsDotsContainer.querySelector('.btn-active').getAttribute('data-id'), 10);
  let dotToActive;

  if (direction === 'left') {
    const lastDotId = parseInt(imgsDotsContainer.querySelector('.dot-container:last-child').getAttribute('data-id'), 10);

    if (activeDotId === lastDotId) {
      dotToActive = document.querySelector(`.dot-container[data-id="${1}"]`);
    } else {
      dotToActive = document.querySelector(`.dot-container[data-id="${activeDotId + 1}"]`);
    }
  } else {
    const firstDotId = parseInt(imgsDotsContainer.querySelector('.dot-container:first-child').getAttribute('data-id'), 10);

    if (activeDotId === firstDotId) {
      dotToActive = document.querySelector(`.dot-container[data-id="${5}"]`);
    } else {
      dotToActive = document.querySelector(`.dot-container[data-id="${activeDotId - 1}"]`);
    }
  }

  return dotToActive;
}

function slideLeft(sliderContainer) {
  const notCurrentSlideRightright = sliderContainer.querySelector('.not-current-slide-rightright');
  const notCurrentSlideRight = sliderContainer.querySelector('.not-current-slide-right');
  const currentSlide = sliderContainer.querySelector('.current-slide');
  const notCurrentSlideLeftleft = sliderContainer.querySelector('.not-current-slide-leftleft');
  const notCurrentSlideLeft = sliderContainer.querySelector('.not-current-slide-left');

  notCurrentSlideRightright.classList.remove('not-current-slide-rightright');
  notCurrentSlideRightright.classList.add('not-current-slide-right');

  notCurrentSlideRight.classList.remove('not-current-slide-right');
  notCurrentSlideRight.classList.add('current-slide');

  currentSlide.classList.remove('current-slide');
  currentSlide.classList.add('not-current-slide-left');

  notCurrentSlideLeftleft.classList.remove('not-current-slide-leftleft');
  notCurrentSlideLeftleft.classList.add('not-current-slide-rightright');

  notCurrentSlideLeft.classList.remove('not-current-slide-left');
  notCurrentSlideLeft.classList.add('not-current-slide-leftleft');

  return notCurrentSlideRight;
}

function slideRight(sliderContainer) {
  const notCurrentSlideRightright = sliderContainer.querySelector('.not-current-slide-rightright');
  const notCurrentSlideRight = sliderContainer.querySelector('.not-current-slide-right');
  const currentSlide = sliderContainer.querySelector('.current-slide');
  const notCurrentSlideLeft = sliderContainer.querySelector('.not-current-slide-left');
  const notCurrentSlideLeftleft = sliderContainer.querySelector('.not-current-slide-leftleft');

  notCurrentSlideRightright.classList.remove('not-current-slide-rightright');
  notCurrentSlideRightright.classList.add('not-current-slide-leftleft');

  notCurrentSlideRight.classList.remove('not-current-slide-right');
  notCurrentSlideRight.classList.add('not-current-slide-rightright');

  currentSlide.classList.remove('current-slide');
  currentSlide.classList.add('not-current-slide-right');

  notCurrentSlideLeft.classList.remove('not-current-slide-left');
  notCurrentSlideLeft.classList.add('current-slide');

  notCurrentSlideLeftleft.classList.remove('not-current-slide-leftleft');
  notCurrentSlideLeftleft.classList.add('not-current-slide-left');

  return notCurrentSlideLeft;
}

function listenLeftArrow() {
  const sliderContainer = document.querySelector('.slider-container');
  const leftArrow = sliderContainer.querySelector('svg:first-child');

  leftArrow.addEventListener('click', () => {
    const dotsContainer = document.querySelectorAll('.dot-container');
    const dotToActive = getDotToActive('right');
    slideRight(sliderContainer);
    setActiveDot(dotsContainer, dotToActive);
  });
}

function listenRightArrow() {
  const sliderContainer = document.querySelector('.slider-container');
  const rightArrow = sliderContainer.querySelector('svg:last-child');

  rightArrow.addEventListener('click', () => {
    const dotsContainer = document.querySelectorAll('.dot-container');
    const dotToActive = getDotToActive('left');
    slideLeft(sliderContainer);
    setActiveDot(dotsContainer, dotToActive);
  });
}

function listenDots() {
  const sliderContainer = document.querySelector('.slider-container');
  const sliderImgContainers = sliderContainer.querySelectorAll('.slider-img-container');
  const dotsContainer = document.querySelectorAll('.dot-container');
  dotsContainer.forEach((dot) => {
    dot.addEventListener('click', () => {
      setActiveDot(dotsContainer, dot);

      const dotId = parseInt(dot.getAttribute('data-id'), 10);
      sliderImgContainers.forEach((slider) => {
        let currentSliderId = parseInt(slider.getAttribute('data-id'), 10);
        let whichSlideDirection = 'right';

        if (dotId < currentSliderId) {
          whichSlideDirection = 'left';
        }

        while (dotId !== currentSliderId) {
          if (whichSlideDirection === 'right') {
            currentSliderId = parseInt(slideRight(sliderContainer).getAttribute('data-id'), 10);
          } else {
            currentSliderId = parseInt(slideLeft(sliderContainer).getAttribute('data-id'), 10);
          }
        }
      });
    });
  });
}

function doAutomaticSlide() {
  const sliderContainer = document.querySelector('.slider-container');
  const dotsContainer = document.querySelectorAll('.dot-container');
  const dotToActive = getDotToActive('left');
  slideLeft(sliderContainer);
  setActiveDot(dotsContainer, dotToActive);
}

export default function handleSlider() {
  let intervalID = setInterval(doAutomaticSlide, 5000);
  window.addEventListener('click', () => {
    clearInterval(intervalID);
    intervalID = setInterval(doAutomaticSlide, 5000);
  });

  listenLeftArrow();
  listenRightArrow();
  listenDots();
}
