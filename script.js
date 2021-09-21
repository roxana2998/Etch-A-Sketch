const container = document.querySelector(".container");
console.log(container);

function createCells(cellsNumber) {
    for(i = 0; i < cellsNumber; i++) {
        let cell = document. createElement("div");
        cell.className = "cell-container";
        container.appendChild(cell);
    }
}


createCells(256);