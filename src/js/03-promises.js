import Notiflix from 'notiflix';

const startButtonPromise = document.querySelector("form")
const firstDelay = document.querySelector("input[name=delay]")
const step = document.querySelector("input[name=step]")
const amount = document.querySelector("input[name=amount]")

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

let position=1;

function onSubmite(event) {
  event.preventDefault()
  createPromise(position, firstDelay.valueAsNumber)
}

createPromise(2, firstDelay.valueAsNumber)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });




















// function createPromise(position, delay) {

//   const stepI = step.valueAsNumber
//   const startPoiny = firstDelay.valueAsNumber
//   const finaly = startPoiny+stepI*amount.valueAsNumber
//   for (let i = startPoiny; i <= finaly; i += stepI) {
//     const x = setTimeout(()=>{
//       position +=1
//       delay=i
      
//       if(position<=amount.value ){
//         const shouldResolve = Math.random() > 0.3;
//         return new Promise(()=>{
//           if (shouldResolve) {
//             // Fulfill
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//           } else {
//             // Reject
//          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//           }
//         })
//       }else{clearInterval(x)}
//     }, i)
//   }
// }






