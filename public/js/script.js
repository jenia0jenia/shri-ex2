/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/carousel.js":
/*!*******************************!*\
  !*** ./public/js/carousel.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initCarousel; });\nfunction initCarousel(selector, option) {\n    let carousel = document.getElementsByClassName(selector),\n        defaultOption = {\n            move: 215,\n            direction: 'horiz',\n            disableClassPostfix: '_disabled'\n        },\n        move,\n        direction;\n\n    if (carousel.length <= 0) {\n        console.log('error scroll selector');\n        return false;\n    }\n\n    carousel = carousel[0];\n\n    if (typeof option.move !== 'undefined') {\n        move = option.move;\n    } else {\n        move = defaultOption.move;\n    }\n\n    if (typeof option.direction !== 'undefined') {\n        direction = option.direction;\n    } else {\n        direction = defaultOption.direction;\n    }\n\n    let prev = document.getElementsByClassName(option.prev)[0],\n        next = document.getElementsByClassName(option.next)[0];\n\n    if (typeof prev !== 'undefined') {\n        prev.addEventListener('click', scrollButtonPrev);\n    }\n\n    if (typeof next !== 'undefined') {\n        next.addEventListener('click', scrollButtonNext);\n    }\n\n\n    if (direction == 'vert') {\n        carousel.addEventListener('scroll', checkScrollTop);\n        checkScrollTop();\n    } else {\n        carousel.addEventListener('scroll', checkScrollLeft);\n        checkScrollLeft();\n    }\n\n    function scrollButtonPrev(e) {\n        if (direction == 'vert') {\n            carousel.scrollTop -= move;\n        } else {\n            carousel.scrollLeft -= move;\n        }\n    }\n\n    function scrollButtonNext(e) {\n        if (direction == 'vert') {\n            carousel.scrollTop += move;\n        } else {\n            carousel.scrollLeft += move;\n        }\n    }\n\n    function checkScrollTop(e) {\n        if (carousel.scrollTop == 0) {\n            prev.classList.add(option.prev + defaultOption.disableClassPostfix);\n        } else {\n            prev.classList.remove(option.prev + defaultOption.disableClassPostfix);\n        }\n\n        if (carousel.clientHeight + carousel.scrollTop >= carousel.scrollHeight) {\n            next.classList.add(option.next + defaultOption.disableClassPostfix);\n        } else {\n            next.classList.remove(option.next + defaultOption.disableClassPostfix);\n        }\n    }\n\n    function checkScrollLeft(e) {\n        if (carousel.scrollLeft == 0) {\n            prev.classList.add(option.prev + defaultOption.disableClassPostfix);\n        } else {\n            prev.classList.remove(option.prev + defaultOption.disableClassPostfix);\n        }\n\n        if (carousel.clientWidth + carousel.scrollLeft >= carousel.scrollWidth) {\n            next.classList.add(option.next + defaultOption.disableClassPostfix);\n        } else {\n            next.classList.remove(option.next + defaultOption.disableClassPostfix);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./public/js/carousel.js?");

/***/ }),

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.js */ \"./public/js/carousel.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./public/js/utils.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    Object(_carousel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('js-carousel-horiz', {\n    \tnext: 'js-carousel-right',\n    \tprev: 'js-carousel-left',\n    \tdirection: 'horis',\n    \tmove: 215,\n    });\n\n    Object(_carousel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('js-carousel-block', {\n    \tprev: 'js-carousel-up_block',\n    \tnext: 'js-carousel-down_block',\n    \tdirection: 'vert',\n    \tmove: 115,\n    });\n\n    //hide button on scroll\n    document.getElementsByClassName('js-vert')[0].onscroll = function() {\n        document.getElementsByClassName('js-vert-button')[0].style.display = 'none';\n    }\n\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"toggleClass\"])('js-burger', 'header__menu', 'header__menu_open')\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"toggleClass\"])('js-selector-button', 'device__selector', 'device__selector_open')\n\n    let cards = document.getElementsByClassName('action__card');\n\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"initCard\"])('js-card-slider', 'js-slider-wrap');\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"initCard\"])('js-card-slider2', 'js-slider2-wrap');\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"initCard\"])('js-card-round', 'js-round-wrap');\n\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"roundSlider\"])('js-range-round', 'js-range-marker', 'js-positive');\n});\n\n//# sourceURL=webpack:///./public/js/index.js?");

/***/ }),

/***/ "./public/js/utils.js":
/*!****************************!*\
  !*** ./public/js/utils.js ***!
  \****************************/
/*! exports provided: toggleClass, initCard, roundSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleClass\", function() { return toggleClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initCard\", function() { return initCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"roundSlider\", function() { return roundSlider; });\nfunction toggleClass(selectorClass, targetClass, className) {\n    let selector = document.getElementsByClassName(selectorClass);\n    let target = document.getElementsByClassName(targetClass);\n\n    if (selector.length > 0 && target.length > 0) {\n        selector[0].addEventListener('click', function() {\n            if (target[0].classList.contains(className)) {\n                target[0].classList.remove(className);\n            } else {\n                target[0].classList.add(className);\n            }\n        });\n    } else {\n        console.log('no selector for class \"' + selectorClass + '\"');\n    }\n}\n\nfunction initCard(cardClass, cardWrapperClass) {\n    let card        = document.getElementsByClassName(cardClass),\n        cardWrapper = document.getElementsByClassName(cardWrapperClass),\n        footer      = document.getElementsByClassName('footer__wrapper'),\n        wrapper     = document.getElementsByClassName('wrapper'),\n        body        = document.getElementsByTagName('body'),\n        close       = cardWrapper[0].getElementsByClassName('js-card-close');\n\n    for (let i = 0; i < card.length; i ++) {\n        card[i].addEventListener('click', function() {\n            cardWrapper[0].classList.add('card__wrapper_opened');\n            footer[0].classList.add('_blur');\n            wrapper[0].classList.add('_blur');\n            body[0].classList.add('_overflow');\n        });\n    }\n\n    for (let i = 0; i < close.length; i ++) {\n        close[i].addEventListener('click', function() {\n            wrapper = document.getElementsByClassName('wrapper');\n            cardWrapper[0].classList.remove('card__wrapper_opened');\n            footer[0].classList.remove('_blur');\n            wrapper[0].classList.remove('_blur');\n            body[0].classList.remove('_overflow');\n        });\n    }\n}\n\nfunction roundSlider(rangeClass, markerClass, negCircleClass) {\n    let range = document.getElementsByClassName(rangeClass);\n    let marker = document.getElementsByClassName(markerClass);\n    let positive = document.getElementsByClassName(negCircleClass);\n\n    // range[0].addEventListener('change', slide);\n    range[0].addEventListener('input', slide);\n\n    function slide(e) {\n        let value = e.target.value || 0;\n        let angel = value * 3.6;\n        let clipPath = '';\n        marker[0].style.transform = 'rotate(' + angel + 'deg) translateY(82px) rotate(-180deg)';\n\n        if (value <= 8 ) {\n            clipPath = 'polygon(50% 50%, 20% 100%, 20% 100%, 20% 100%, 20% 100%, 20% 100%, 20% 100%)';\n        } else if (value > 8 && value <= 12.5) {\n            let k = 50 - 4 * value;\n            clipPath = 'polygon('\n                + '50% 50%,'\n                + '21% 100%,'\n                + k + '% 100%,'\n                + k + '% 100%,'\n                + k + '% 100%,'\n                + k + '% 100%,'\n                + k + '% 100%)';\n        } else if (value > 12.5 && value <= 37.5) {\n            let k = 150 - 4 * value;\n            clipPath = 'polygon('\n                + '50% 50%,'\n                + '21% 100%,'\n                + '0 100%,'\n                + '0 ' + k + '%,'\n                + '0 ' + k + '%,'\n                + '0 ' + k + '%,'\n                + '0 ' + k + '%)';\n        } else if (value > 27.5 && value <= 62.5) {\n            let k = 4 * value - 150;\n            clipPath = 'polygon('\n                + '50% 50%,'\n                + '21% 100%,'\n                + '0 100%,'\n                + '0 0,'\n                + k + '% 0,'\n                + k + '% 0,'\n                + k + '% 0)';\n        } else if (value > 62.5 && value <= 87.5) {\n            let k = 4 * value - 250;\n            clipPath = 'polygon('\n                + '50% 50%,'\n                + '21% 100%,'\n                + '0 100%,'\n                + '0 0,'\n                + '100% 0,'\n                + '100% ' + k + '%,'\n                + '100% ' + k + '%)';\n        } else if (value > 87.5 && value < 92) {\n            let k = 450 - 4 * value;\n            clipPath = 'polygon('\n                + '50% 50%,'\n                + '21% 100%,'\n                + '0 100%,'\n                + '0 0,'\n                + '100% 0,'\n                + '100% 100%,'\n                + k + '% 100%)';\n            console.log(k);\n        } else if (value == 92) {\n            clipPath = 'polygon(50% 50%, 21% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 80% 100%)';\n        }\n\n        console.log(value);\n        positive[0].style.clipPath = clipPath;\n    }\n}\n\n//# sourceURL=webpack:///./public/js/utils.js?");

/***/ })

/******/ });