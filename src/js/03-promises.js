import Notiflix from 'notiflix';

const startButtonPromise = document.querySelector("form")
const firstDelay = document.querySelector("input[name=delay]")
const step = document.querySelector("input[name=step]")
const amount = document.querySelector("input[name=amount]")

startButtonPromise.addEventListener("submit", onSubmite)

let counter=0


function createPromise(position, delay) {
  setInterval(()=>{
    counter +=1
    position = counter
    // firstDelay.valueAsNumber += step.valueAsNumber
    
if(counter<=amount.value  ){
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);

  } else {
    // Reject
    Notiflix.Notify.failure("❌ Rejected promise ${position} in ${delay}ms")
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);

  }

}
  },delay)
}


function onSubmite(event) {
  event.preventDefault()
  createPromise(counter, firstDelay.valueAsNumber)
}

// .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

