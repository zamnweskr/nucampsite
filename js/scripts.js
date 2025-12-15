console.log('JavaScript Connected!');

const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 5000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})

async function fetchWeather() {
    try {
        const apiKey = process.env.OPEN_WEATHER_API_KEY;
        const city = 'Franklin';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        displayWeather(data);
        console.log(data);
    } catch (error) {
        console.error('There was an error!', error);
    }
}

function displayWeather(data) {
    const weatherIcon = document.createElement('img');
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const iconNode = document.querySelector('#weather-icon');
    iconNode.appendChild(weatherIcon);

    const temp = data.main.temp;
    const tempNode = document.querySelector('#weather-temp');
    tempNode.textContent = temp + '\u00B0' + 'C';

    const desc = data.weather[0].description;
    const descNode = document.querySelector('#weather-description');
    descNode.textContent = desc;

    const city = data.name;
    const cityNode = document.querySelector('#city');
    cityNode.textContent = city;
    

}

fetchWeather();