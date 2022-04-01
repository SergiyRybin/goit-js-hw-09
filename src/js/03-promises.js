import Notiflix from 'notiflix';

const startButtonPromise = document.querySelector("form")
const firstDelay = document.querySelector("input[name=delay]")
const step = document.querySelector("input[name=step]")
const amount = document.querySelector("input[name=amount]")

startButtonPromise.addEventListener("submit", onSubmite)

let position=0;

function createPromise(position, delay) {

  const stepI = step.valueAsNumber
  const startPoiny = firstDelay.valueAsNumber
  const finaly = startPoiny+stepI*amount.valueAsNumber
  for (let i = startPoiny; i <= finaly; i += stepI) {
    const x = setTimeout(()=>{
      position +=1
      delay=i
      
      if(position<=amount.value ){
        const shouldResolve = Math.random() > 0.3;
        return new Promise(()=>{
          if (shouldResolve) {
            // Fulfill
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          } else {
            // Reject
         Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          }
        })
      }else{clearInterval(x)}
    }, i)
  }
}


function onSubmite(event) {
  event.preventDefault()
  createPromise(position, firstDelay.valueAsNumber)
}




