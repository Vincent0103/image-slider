/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handleSlider.js":
/*!*****************************!*\
  !*** ./src/handleSlider.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleSlider)\n/* harmony export */ });\nfunction setActiveDot(dotsContainer, dotToActive) {\n  dotsContainer.forEach((container) => {\n    if (container.classList.contains('btn-active')) {\n      container.classList.remove('btn-active');\n    }\n  });\n  dotToActive.classList.add('btn-active');\n}\n\nfunction getDotToActive(direction) {\n  const imgsDotsContainer = document.querySelector('.imgs-dots-container');\n  const activeDotId = parseInt(imgsDotsContainer.querySelector('.btn-active').getAttribute('data-id'), 10);\n  let dotToActive;\n\n  if (direction === 'left') {\n    const lastDotId = parseInt(imgsDotsContainer.querySelector('.dot-container:last-child').getAttribute('data-id'), 10);\n\n    if (activeDotId === lastDotId) {\n      dotToActive = document.querySelector(`.dot-container[data-id=\"${1}\"]`);\n    } else {\n      dotToActive = document.querySelector(`.dot-container[data-id=\"${activeDotId + 1}\"]`);\n    }\n  } else {\n    const firstDotId = parseInt(imgsDotsContainer.querySelector('.dot-container:first-child').getAttribute('data-id'), 10);\n\n    if (activeDotId === firstDotId) {\n      dotToActive = document.querySelector(`.dot-container[data-id=\"${5}\"]`);\n    } else {\n      dotToActive = document.querySelector(`.dot-container[data-id=\"${activeDotId - 1}\"]`);\n    }\n  }\n\n  return dotToActive;\n}\n\nfunction slideLeft(sliderContainer) {\n  const notCurrentSlideRightright = sliderContainer.querySelector('.not-current-slide-rightright');\n  const notCurrentSlideRight = sliderContainer.querySelector('.not-current-slide-right');\n  const currentSlide = sliderContainer.querySelector('.current-slide');\n  const notCurrentSlideLeftleft = sliderContainer.querySelector('.not-current-slide-leftleft');\n  const notCurrentSlideLeft = sliderContainer.querySelector('.not-current-slide-left');\n\n  notCurrentSlideRightright.classList.remove('not-current-slide-rightright');\n  notCurrentSlideRightright.classList.add('not-current-slide-right');\n\n  notCurrentSlideRight.classList.remove('not-current-slide-right');\n  notCurrentSlideRight.classList.add('current-slide');\n\n  currentSlide.classList.remove('current-slide');\n  currentSlide.classList.add('not-current-slide-left');\n\n  notCurrentSlideLeftleft.classList.remove('not-current-slide-leftleft');\n  notCurrentSlideLeftleft.classList.add('not-current-slide-rightright');\n\n  notCurrentSlideLeft.classList.remove('not-current-slide-left');\n  notCurrentSlideLeft.classList.add('not-current-slide-leftleft');\n\n  return notCurrentSlideRight;\n}\n\nfunction slideRight(sliderContainer) {\n  const notCurrentSlideRightright = sliderContainer.querySelector('.not-current-slide-rightright');\n  const notCurrentSlideRight = sliderContainer.querySelector('.not-current-slide-right');\n  const currentSlide = sliderContainer.querySelector('.current-slide');\n  const notCurrentSlideLeft = sliderContainer.querySelector('.not-current-slide-left');\n  const notCurrentSlideLeftleft = sliderContainer.querySelector('.not-current-slide-leftleft');\n\n  notCurrentSlideRightright.classList.remove('not-current-slide-rightright');\n  notCurrentSlideRightright.classList.add('not-current-slide-leftleft');\n\n  notCurrentSlideRight.classList.remove('not-current-slide-right');\n  notCurrentSlideRight.classList.add('not-current-slide-rightright');\n\n  currentSlide.classList.remove('current-slide');\n  currentSlide.classList.add('not-current-slide-right');\n\n  notCurrentSlideLeft.classList.remove('not-current-slide-left');\n  notCurrentSlideLeft.classList.add('current-slide');\n\n  notCurrentSlideLeftleft.classList.remove('not-current-slide-leftleft');\n  notCurrentSlideLeftleft.classList.add('not-current-slide-left');\n\n  return notCurrentSlideLeft;\n}\n\nfunction listenLeftArrow() {\n  const sliderContainer = document.querySelector('.slider-container');\n  const leftArrow = sliderContainer.querySelector('svg:first-child');\n\n  leftArrow.addEventListener('click', () => {\n    const dotsContainer = document.querySelectorAll('.dot-container');\n    const dotToActive = getDotToActive('right');\n    slideRight(sliderContainer);\n    setActiveDot(dotsContainer, dotToActive);\n  });\n}\n\nfunction listenRightArrow() {\n  const sliderContainer = document.querySelector('.slider-container');\n  const rightArrow = sliderContainer.querySelector('svg:last-child');\n\n  rightArrow.addEventListener('click', () => {\n    const dotsContainer = document.querySelectorAll('.dot-container');\n    const dotToActive = getDotToActive('left');\n    slideLeft(sliderContainer);\n    setActiveDot(dotsContainer, dotToActive);\n  });\n}\n\nfunction listenDots() {\n  const sliderContainer = document.querySelector('.slider-container');\n  const sliderImgContainers = sliderContainer.querySelectorAll('.slider-img-container');\n  const dotsContainer = document.querySelectorAll('.dot-container');\n  dotsContainer.forEach((dot) => {\n    dot.addEventListener('click', () => {\n      setActiveDot(dotsContainer, dot);\n\n      const dotId = parseInt(dot.getAttribute('data-id'), 10);\n      sliderImgContainers.forEach((slider) => {\n        let currentSliderId = parseInt(slider.getAttribute('data-id'), 10);\n        let whichSlideDirection = 'right';\n\n        if (dotId < currentSliderId) {\n          whichSlideDirection = 'left';\n        }\n\n        while (dotId !== currentSliderId) {\n          if (whichSlideDirection === 'right') {\n            currentSliderId = parseInt(slideRight(sliderContainer).getAttribute('data-id'), 10);\n          } else {\n            currentSliderId = parseInt(slideLeft(sliderContainer).getAttribute('data-id'), 10);\n          }\n        }\n      });\n    });\n  });\n}\n\nfunction doAutomaticSlide() {\n  const sliderContainer = document.querySelector('.slider-container');\n  const dotsContainer = document.querySelectorAll('.dot-container');\n  const dotToActive = getDotToActive('left');\n  slideLeft(sliderContainer);\n  setActiveDot(dotsContainer, dotToActive);\n}\n\nfunction handleSlider() {\n  let intervalID = setInterval(doAutomaticSlide, 5000);\n  window.addEventListener('click', () => {\n    clearInterval(intervalID);\n    intervalID = setInterval(doAutomaticSlide, 5000);\n  });\n\n  listenLeftArrow();\n  listenRightArrow();\n  listenDots();\n}\n\n\n//# sourceURL=webpack://my_package/./src/handleSlider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handleSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleSlider */ \"./src/handleSlider.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  (0,_handleSlider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://my_package/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;