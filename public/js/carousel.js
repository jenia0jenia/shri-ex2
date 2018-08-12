export default function initCarousel(selector, option) {
    let carousel = document.getElementsByClassName(selector),
        defaultOption = {
            move: 215,
            direction: 'horiz',
            disableClass: '_disabled'
        },
        move,
        direction;

    if (carousel.length <= 0) {
        console.log('error scroll selector');
        return false;
    }

    carousel = carousel[0];

    if (typeof option.move !== 'undefined') {
        move = option.move;
    } else {
        move = defaultOption.move;
    }

    if (typeof option.direction !== 'undefined') {
        direction = option.direction;
    } else {
        direction = defaultOption.direction;
    }

    let prev = document.getElementsByClassName(option.prev)[0],
        next = document.getElementsByClassName(option.next)[0];

    if (typeof prev !== 'undefined') {
        prev.classList.add(option.prev + '_disabled');
        prev.addEventListener('click', scrollButtonPrev);
    }

    if (typeof next !== 'undefined') {
        next.addEventListener('click', scrollButtonNext);
    }

    if (direction == 'vert') {
        carousel.addEventListener('scroll', checkScrollTop);
    } else {
        carousel.addEventListener('scroll', checkScrollLeft);
    }

    function scrollButtonPrev(e) {
        if (direction == 'vert') {
            carousel.scrollTop -= move;
        } else {
            carousel.scrollLeft -= move;
        }
    }

    function scrollButtonNext(e) {
        if (direction == 'vert') {
            carousel.scrollTop += move;
            checkScrollTop(e.target);
        } else {
            carousel.scrollLeft += move;
            checkScrollLeft(e.target);
        }
    }

    function checkScrollTop(e) {
        if (carousel.scrollTop == 0) {
            prev.classList.add(option.prev + defaultOption.disableClass);
        } else {
            prev.classList.remove(option.prev + defaultOption.disableClass);
        }

        if (carousel.clientHeight + carousel.scrollTop >= carousel.scrollHeight) {
            next.classList.add(option.next + defaultOption.disableClass);
        } else {
            next.classList.remove(option.next + defaultOption.disableClass);
        }
    }

    function checkScrollLeft(e) {
        if (carousel.scrollLeft == 0) {
            prev.classList.add(option.prev + defaultOption.disableClass);
        } else {
            prev.classList.remove(option.prev + defaultOption.disableClass);
        }

        if (carousel.clientWidth + carousel.scrollLeft >= carousel.scrollWidth) {
            next.classList.add(option.next + defaultOption.disableClass);
        } else {
            next.classList.remove(option.next + defaultOption.disableClass);
        }
    }
}
