import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startButton = document.querySelector("button[data-start]")
startButton.disabled=true

let msi
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(options.defaultDate >= selectedDates[0]){

            Notiflix.Notify.failure("Please choose a date in the future")
            startButton.disabled=true

        }else{
            startButton.disabled=false
        }
    //   console.log(selectedDates[0].getTime() - options.defaultDate.getTime());
    //   console.log(options.defaultDate.getTime())
    msi = selectedDates[0]-options.defaultDate
    
   console.log(convertMs(msi))
},
  };



flatpickr("#datetime-picker", options)

startButton.addEventListener("click",()=>{

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
  
