const time = document.querySelector('.time');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
}
showTime();

const dated = document.querySelector('.date');

function showDate() {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' };
    const currentDate = date.toLocaleDateString('en-US', options);
    dated.textContent = currentDate;
    setTimeout(showDate, 1000);
}
showDate();

const text = document.querySelector('.greeting');

function showGreeting() {
    getTimeOfDay();
    setTimeout(showGreeting, 1000);
}
showGreeting();

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    let greetingText;
    let timeOfDay;

    if (hours >= 6 && hours < 12) {
        timeOfDay = 'Morning';
        greetingText = `Good ${timeOfDay},`;
        text.textContent = greetingText;
    }
    if (hours >= 12 && hours < 18) {
        timeOfDay = 'Afternoon';
        greetingText = `Good ${timeOfDay},`;
        text.textContent = greetingText;
    }
    if (hours >= 18 && hours < 24) {
        timeOfDay = 'Evening';
        greetingText = `Good ${timeOfDay},`;
        text.textContent = greetingText;
    }
    if (hours >= 0 && hours < 6) {
        timeOfDay = 'Night';
        greetingText = `Good ${timeOfDay},`;
        text.textContent = greetingText();
    }

    return timeOfDay;
}

function setLocalStorage() {
    let name = document.querySelector('.name');
    localStorage.setItem('name', name.value);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    let name = document.querySelector('.name');
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)

let randomNum = (Math.floor(Math.random() * 20) + 1);

function setBg() {
    let timeOfDay = getTimeOfDay().toLowerCase();
    let bgNum = randomNum.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    const body = document.body;
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`
    };
}
setBg();

const slideNext = document.querySelector('.slide-next.slider-icon');
const slidePrev = document.querySelector('.slide-prev.slider-icon');

function getSlideNext() {
    if (randomNum === 20) {
        randomNum = 1;
    }
    else {
        randomNum++;
    }
    setBg();
}

slideNext.addEventListener('click', getSlideNext);

function getSlidePrev() {
    if (randomNum === 1) {
        randomNum = 20;
    }
    else {
        randomNum = randomNum - 1;
    }
    setBg();
}

slidePrev.addEventListener('click', getSlidePrev);

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');

let city = document.querySelector('.city');

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
}
getLocalStorageCity();
getWeather();

function setLocalStorageCity() {
    localStorage.setItem('city', city.value);
}

function getLocalStorageCity() {
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
}

window.addEventListener('beforeunload', setLocalStorageCity);
window.addEventListener('load', getLocalStorageCity)

city.onchange = getWeather;



