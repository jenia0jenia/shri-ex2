export function toggleClass(selectorClass, targetClass, className) {
    let selector = document.getElementsByClassName(selectorClass);
    let target = document.getElementsByClassName(targetClass);

    if (selector.length > 0 && target.length > 0) {
        selector[0].addEventListener('click', function() {
            if (target[0].classList.contains(className)) {
                target[0].classList.remove(className);
            } else {
                target[0].classList.add(className);
            }
        });
    } else {
        console.log('no selector for class "' + selectorClass + '"');
    }
}

export function initCard(cardClass, cardWrapperClass) {
    let card        = document.getElementsByClassName(cardClass),
        cardWrapper = document.getElementsByClassName(cardWrapperClass),
        footer      = document.getElementsByClassName('footer__wrapper'),
        wrapper     = document.getElementsByClassName('wrapper'),
        body        = document.getElementsByTagName('body'),
        close       = cardWrapper[0].getElementsByClassName('js-card-close');

    for (let i = 0; i < card.length; i ++) {
        card[i].addEventListener('click', function() {
            cardWrapper[0].classList.add('card__wrapper_opened');
            footer[0].classList.add('_blur');
            wrapper[0].classList.add('_blur');
            body[0].classList.add('_overflow');
        });
    }

    for (let i = 0; i < close.length; i ++) {
        close[i].addEventListener('click', function() {
            wrapper = document.getElementsByClassName('wrapper');
            cardWrapper[0].classList.remove('card__wrapper_opened');
            footer[0].classList.remove('_blur');
            wrapper[0].classList.remove('_blur');
            body[0].classList.remove('_overflow');
        });
    }
}

export function roundSlider(rangeClass, markerClass, negCircleClass) {
    let range = document.getElementsByClassName(rangeClass);
    let marker = document.getElementsByClassName(markerClass);
    let positive = document.getElementsByClassName(negCircleClass);

    // range[0].addEventListener('change', slide);
    range[0].addEventListener('input', slide);

    function slide(e) {
        let value = e.target.value || 0;
        let angel = value * 3.6;
        let clipPath = '';
        marker[0].style.transform = 'rotate(' + angel + 'deg) translateY(82px) rotate(-180deg)';

        if (value <= 8 ) {
            clipPath = 'polygon(50% 50%, 20% 100%, 20% 100%, 20% 100%, 20% 100%, 20% 100%, 20% 100%)';
        } else if (value > 8 && value <= 12.5) {
            let k = 50 - 4 * value;
            clipPath = 'polygon('
                + '50% 50%,'
                + '21% 100%,'
                + k + '% 100%,'
                + k + '% 100%,'
                + k + '% 100%,'
                + k + '% 100%,'
                + k + '% 100%)';
        } else if (value > 12.5 && value <= 37.5) {
            let k = 150 - 4 * value;
            clipPath = 'polygon('
                + '50% 50%,'
                + '21% 100%,'
                + '0 100%,'
                + '0 ' + k + '%,'
                + '0 ' + k + '%,'
                + '0 ' + k + '%,'
                + '0 ' + k + '%)';
        } else if (value > 27.5 && value <= 62.5) {
            let k = 4 * value - 150;
            clipPath = 'polygon('
                + '50% 50%,'
                + '21% 100%,'
                + '0 100%,'
                + '0 0,'
                + k + '% 0,'
                + k + '% 0,'
                + k + '% 0)';
        } else if (value > 62.5 && value <= 87.5) {
            let k = 4 * value - 250;
            clipPath = 'polygon('
                + '50% 50%,'
                + '21% 100%,'
                + '0 100%,'
                + '0 0,'
                + '100% 0,'
                + '100% ' + k + '%,'
                + '100% ' + k + '%)';
        } else if (value > 87.5 && value < 92) {
            let k = 450 - 4 * value;
            clipPath = 'polygon('
                + '50% 50%,'
                + '21% 100%,'
                + '0 100%,'
                + '0 0,'
                + '100% 0,'
                + '100% 100%,'
                + k + '% 100%)';
            console.log(k);
        } else if (value == 92) {
            clipPath = 'polygon(50% 50%, 21% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 80% 100%)';
        }

        console.log(value);
        positive[0].style.clipPath = clipPath;
    }
}