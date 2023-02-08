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

function showGreeting(){
    getTimeOfDay();
    setTimeout(showGreeting, 1000);
}
showGreeting();

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 5 && hours < 12) {
        const timeOfDay = 'Morning';
        const greetingText = `Good ${timeOfDay},`;
        text.textContent = greetingText;
    }
    if (hours >= 12 && hours < 18) {
        const timeOfDay = 'Afternoon';
        const greetingText = `Good ${timeOfDay},`;
        text.textContent = greetingText;
    }
    if (hours >= 18 && hours < 21) {
        const timeOfDay = 'Evening';
        const greetingText = `Good ${timeOfDay},`;
        text.textContent = greetingText;
    }
    if (hours >= 21 && hours < 5) {
        const timeOfDay = 'Night';
        const greetingText = `Good ${timeOfDay},`;
        text.textContent = greetingText();
    }
}

function setLocalStorage() {
    let name = document.querySelector('.name');
    localStorage.setItem('name', name.value);
  }

  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    let name = document.querySelector('.name');
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)




