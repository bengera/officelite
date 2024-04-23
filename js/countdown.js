const dayNumber = document.getElementById('days');
const hourNumber = document.getElementById('hours');
const minuteNumber = document.getElementById('minutes');
const secondNumber = document.getElementById('seconds');
const countdownBoxDays = document.querySelector('div.countdown__box:nth-child(1)');

const targetDate = new Date('2025-04-04T00:00:00');

// COUNTDOWN TIMER
function countdown() {
    
    const now = new Date().getTime();
    const difference = targetDate - now;    
    
    if (difference <= 0){
        clearInterval(timerUpdate);
        console.log('timer has expired');
    } else {

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

dayNumber.textContent = days;
hourNumber.textContent = hours;
minuteNumber.textContent = minutes;
secondNumber.textContent = seconds;

// Adjust box size for larger number of days

if (days.toString().length >= 3){
    countdownBoxDays.style.width = "130px";
}
        
    }


}


// Update timer
const timerUpdate = setInterval(countdown, 1000);


countdown();

