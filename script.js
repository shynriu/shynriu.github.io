// script.js
const backgroundElement = document.querySelector('.background');

anime({
    targets: backgroundElement,
    backgroundPositionX: '200%', // Move the background 200% to the right
    duration: 100, // Animation duration in milliseconds
    loop: true, // Loop the animation
    easing: 'linear' // Linear easing for continuous movement
});
