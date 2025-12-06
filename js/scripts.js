console.log('JavaScript Connected!');
//console.log('Bootstrap Available?', typeof bootstrap);

//const carouselElement = document.querySelector('#homeCarousel');
//console.log('Carousel Element:', carouselElement);

const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
})

//console.log('Carousel Instance:', carousel);

//when pause button is clicked, pause the carousel
const carouselPause = document.getElementById('carouselPause');
carouselPause.addEventListener('click', function() {
    console.log('pausing the carousel');
    carousel.pause();
})

//when play button is clicked, begin cycling through the images
const carouselPlay = document.getElementById('carouselPlay');
carouselPlay.addEventListener('click', function() {
    console.log('cycle the carousel');
    carousel.cycle();
})