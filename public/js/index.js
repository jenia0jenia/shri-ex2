'use strict';

import carousel from "./carousel.js";

document.addEventListener('DOMContentLoaded', function() {
    carousel('js-carousel-horiz', {
    	next: 'js-carousel-right',
    	prev: 'js-carousel-left',
    	direction: 'horis',
    	move: 215,
    });

    carousel('js-carousel-vert', {
    	prev: 'js-carousel-up',
    	next: 'js-carousel-down',
    	direction: 'vert',
    	move: 135,
    });

    carousel('js-carousel-block', {
    	prev: 'js-carousel-up_block',
    	next: 'js-carousel-down_block',
    	direction: 'vert',
    	move: 115,
    });
});