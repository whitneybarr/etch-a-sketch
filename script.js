const container = document.querySelector("#container")
const cell = document.createElement("div")
cell.setAttribute("class","cell")

for (i = 0; i < 256; i++) {
    container.appendChild(cell.cloneNode(true));
}

const cells = document.querySelectorAll(".cell")

for (const piece of cells) {
    piece.addEventListener("mouseenter", () => {
        console.log("hover")
        piece.setAttribute("class", "cellFilled")
    })
}