const dayNumber = document.getElementById('days');
const hourNumber = document.getElementById('hours');
const minuteNumber = document.getElementById('minutes');
const secondNumber = document.getElementById('seconds');


const targetDate = new Date('2025-11-04T00:00:00');

// COUNTDOWN TIMER
function countdown() {
    
    const now = new Date().getTime();
    const difference = targetDate - now;    

const days = Math.floor(difference / (1000 * 60 * 60 * 24));
const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((difference % (1000 * 60)) / 1000);


dayNumber.textContent = days;
hourNumber.textContent = hours;
minuteNumber.textContent = minutes;
secondNumber.textContent = seconds;

}

// Update timer
const timerUpdate = setInterval(countdown, 1000);


countdown();