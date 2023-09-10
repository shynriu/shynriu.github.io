

// script.js
const backgroundElement = document.querySelector('.background');
const circleElement = document.querySelector('.circle1');
const logoElement = document.querySelector('.logo');

anime({
    targets: backgroundElement,
    //make gradient background move
    backgroundPositionX: 500,
    //make background move
    translateX: 500,
    //make background scale
    scale: 2,
    //make background border
    border: '2px solid #000',
    //make background border radius
    borderRadius: ['0%', '50%'],
    //make background easing
    easing: 'easeInOutQuad',
    //make background duration
    duration: 3000,
    //make background delay
    delay: 1000,
    //make background loop
    loop: true,
    //make background direction
    direction: 'alternate',
    //make background autoplay
    autoplay: true,
    //make background end delay
    endDelay: 1000,
    //make background complete

});

