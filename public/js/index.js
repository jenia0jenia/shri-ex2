'use strict';

import carousel from "./carousel.js";
import {toggleClass, initCard, roundSlider} from "./utils.js";

document.addEventListener('DOMContentLoaded', function() {
    carousel('js-carousel-horiz', {
    	next: 'js-carousel-right',
    	prev: 'js-carousel-left',
    	direction: 'horis',
    	move: 215,
    });

    carousel('js-carousel-block', {
    	prev: 'js-carousel-up_block',
    	next: 'js-carousel-down_block',
    	direction: 'vert',
    	move: 115,
    });

    //hide button on scroll
    document.getElementsByClassName('js-vert')[0].onscroll = function() {
        document.getElementsByClassName('js-vert-button')[0].style.display = 'none';
    }

    toggleClass('js-burger', 'header__menu', 'header__menu_open')
    toggleClass('js-selector-button', 'device__selector', 'device__selector_open')

    let cards = document.getElementsByClassName('action__card');

    initCard('js-card-slider', 'js-slider-wrap');
    initCard('js-card-slider2', 'js-slider2-wrap');
    initCard('js-card-round', 'js-round-wrap');

    roundSlider('js-range-round', 'js-range-marker', 'js-positive');
});