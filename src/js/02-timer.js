import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startButton = document.querySelector("button[data-start]")
const timerDay = document.querySelector("[data-days]")
const timerHouers = document.querySelector("[data-hours]")
const timerMinutes = document.querySelector("[data-minutes]")
const timerSeconds = document.querySelector("[data-seconds]")

startButton.disabled=true


let msi = null
let selected = null
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(options.defaultDate >= selectedDates[0]){
            Notiflix.Notify.failure("Please choose a date in the future")
            startButton.disabled=true
        }
        startButton.disabled=false

        selected = selectedDates[0]
        msi = selected-options.defaultDate
        timerDay.innerHTML = convertMs(msi).days 
        timerHouers.innerHTML = convertMs(msi).hours
        timerMinutes.innerHTML = convertMs(msi).minutes
        timerSeconds.innerHTML = convertMs(msi).seconds


},
  };
flatpickr("#datetime-picker", options)


 startButton.addEventListener("click",()=>{
    startButton.disabled=true

    const x = setInterval(()=>{
        let now =  new Date()
        msi = selected-now
        timerDay.innerHTML = convertMs(msi).days 
        timerHouers.innerHTML = convertMs(msi).hours
        timerMinutes.innerHTML = convertMs(msi).minutes
        timerSeconds.innerHTML = convertMs(msi).seconds
        if(msi<999){
            clearInterval(x)
           Notiflix.Notify.failure("Please stop")
           startButton.disabled=false
 
        }
    }, 1000)
})

function addLeadingZero(value){
    return String(value).padStart(2, "0");
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
