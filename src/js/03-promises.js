import Notiflix from 'notiflix';

const startButtonPromise = document.querySelector("form")
const firstDelay = document.querySelector("input[name=delay]")
const step = document.querySelector("input[name=step]")
const amount = document.querySelector("input[name=amount]")
let position=0;

startButtonPromise.addEventListener("submit", onSubmite)

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

return new Promise((resolve, reject)=>{
setTimeout(()=>{
  if (shouldResolve) {
    // Fulfill
    resolve({position, delay});

  } else {
    // Reject
    reject({position, delay})
  }
}, delay)
});
}



function onSubmite(event) {
  event.preventDefault()
  let stepI = step.valueAsNumber
  let startPoint = firstDelay.valueAsNumber
  const finaly = startPoint+amount.valueAsNumber*stepI
    for (let i = startPoint; i < finaly; i += stepI) {
      position +=1
      startPoint = i
      
      createPromise(position, startPoint)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    }
}






















