function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


const bodyBacground = document.querySelector("body")
const starBatton = document.querySelector("button[data-start]")
const stopBatton = document.querySelector("button[data-stop]")
let timer


starBatton.addEventListener("click", () => {
  timer = setInterval(changeColor, 1000)
  starBatton.disabled=true
})

stopBatton.addEventListener("click",()=>{
  clearInterval(timer)
  starBatton.disabled=false

})

function changeColor(){
    bodyBacground.style.backgroundColor = getRandomHexColor()
}
