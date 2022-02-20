import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startButton = document.querySelector("button[data-start]")
// startButton.disabled=true

const timerDay = document.querySelector("[data-days]")
const timerHouers = document.querySelector("[data-hours]")
const timerMinutes = document.querySelector("[data-minutes]")
const timerSeconds = document.querySelector("[data-seconds]")



let msi = null
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(options.defaultDate >= selectedDates[0]){

            Notiflix.Notify.failure("Please choose a date in the future")
            // startButton.disabled=true

        }else{
            // startButton.disabled=false
        }
    //   console.log(selectedDates[0].getTime() - options.defaultDate.getTime());
    //   console.log(options.defaultDate.getTime())
    msi = selectedDates[0]-options.defaultDate

    timerDay.textContent = convertMs(msi).days 
    timerHouers.textContent = convertMs(msi).hours
    timerMinutes.textContent = convertMs(msi).minutes
    timerSeconds.textContent = convertMs(msi).seconds

},
  };


flatpickr("#datetime-picker", options)

startButton.addEventListener("click",()=>{
    setInterval(()=>{
   if(timerSeconds.innerHTML >0 || timerSeconds <=60){
    console.log(timerSeconds.innerHTML-=1)
    return
    
   } 

    }, 1000)

})


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
