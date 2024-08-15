const container = document.querySelector("#container")
let gridSize = 16

const button = document.querySelector("button")

function drawGrid() {
for (i = 0; i < gridSize ** 2; i++) {
    let o = 0
    let cell = document.createElement("div")
    cell.setAttribute("class","cell")
    cell.setAttribute("style", `height: ${960/gridSize-3}px; width:${960/gridSize-3}px`)
    cell.addEventListener("mouseenter", () => {
        cell.setAttribute("class", "cellFilled")
       cell.style.backgroundColor = `rgb(${Math.floor(Math.random() * (256 - 0))} ${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)} / ${o+= .1})`
    })
    container.appendChild(cell);
}}

button.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
   gridSize = Number(prompt("How many squares per side? (Must be less than 100)"))
   if (gridSize > 100) {
    alert("Too Many!")
    } else {
        drawGrid()
    }
})

drawGrid()




