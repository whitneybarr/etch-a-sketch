const container = document.querySelector("#container")
let gridSize = 16

const button = document.querySelector("button")

function drawGrid() {
for (i = 0; i < gridSize ** 2; i++) {
    let cell = document.createElement("div")
    cell.setAttribute("class","cell")
    cell.addEventListener("mouseenter", () => {
        cell.setAttribute("class", "cellFilled")
    })
    container.appendChild(cell);
}}

button.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
   gridSize = Number(prompt("How many squares per side?"))
   if (gridSize > 100) {
    alert("Too Many!")
    } else {
        drawGrid()
    }
})

drawGrid()




