function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


const bodyBacground = document.querySelector("body")
const starBatton = document.querySelector("button[data-start]")
const stopBatton = document.querySelector("button[data-stop]")

// console.log(bodyBacground.style.display = "flex")
// console.log(bodyBacground.style)

starBatton.addEventListener("click", changeColor)

function changeColor(){
    bodyBacground.style.backgroundColor = getRandomHexColor()
}