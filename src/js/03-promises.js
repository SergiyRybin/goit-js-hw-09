import Notiflix from 'notiflix';

const startButtonPromise = document.querySelector("form")
const firstDelay = document.querySelector("input[name=delay]")
const step = document.querySelector("input[name=step]")
const amount = document.querySelector("input[name=amount]")

startButtonPromise.addEventListener("submit", onSubmite)

let position=0;

function createPromise(position, delay) {
 const x = setInterval(()=>{
delay+=step.valueAsNumber

    position +=1
console.log(delay)
if(position<=amount.value ){
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  }
}else{
  clearInterval(x)
}
  }, delay)


}


function onSubmite(event) {
  event.preventDefault()
  createPromise(position, firstDelay.valueAsNumber)
}

// .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

