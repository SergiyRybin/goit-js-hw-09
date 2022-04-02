import Notiflix from 'notiflix';

const startButtonPromise = document.querySelector("form")

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

  let amount = event.currentTarget.elements.amount.valueAsNumber
  let stepI = event.currentTarget.elements.step.valueAsNumber
  let startPoint = event.currentTarget.elements.delay.valueAsNumber

  for (let position = 1; position <= amount; position +=1) {
      createPromise(position, startPoint)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

      startPoint+=stepI

    }
}






















