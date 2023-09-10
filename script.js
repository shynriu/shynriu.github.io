// script.js
const backgroundElement = document.querySelector('.background');
const circleElement = document.querySelector('.circle');
const logoElement = document.querySelector('.logo');

anime({
    targets: backgroundElement,
    backgroundPositionX: '200%', // Move the background 200% to the right
    duration: 100, // Animation duration in milliseconds
    loop: true, // Loop the animation
    easing: 'linear' // Linear easing for continuous movement
});



/*anime({
    targets: circleElement,
    keyframes: [
        {translateY: -40},
        {translateX: 250},
        {translateY: 40},
        {translateX: 0},
        {translateY: 0}
    ],
    duration: 4000, // Animation duration in milliseconds
    loop: true, // Loop the animation
    easing: 'easeOutElastic(1, .8)',
});*/


