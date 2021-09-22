const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear-button");
const changeInput = document.querySelector(".change-input");
const colorButton = document.querySelector(".color-button");
const colorPalette = document.querySelector(".change-color");
const blackButton = document.querySelector(".black-button");
const eraseButton = document.querySelector(".erase-button");

let color = "black";
changeInput.value = 16;

function clearCells() {
  let cells = document.querySelectorAll(".cell");
  for (i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "white";
  }

  //   let cells2 = [...document.querySelectorAll(".cell")];
  //   for (let cell of cells2) {
  //     cell.style.backgroundColor = "white";
  //   }
}

function clearGrid(cellsNumber) {
  for (i = 0; i < cellsNumber; i++) {
    container.innerHTML = "";
  }
}

function getColor() {
  if (color === "random") {
    let random = () => Math.floor(Math.random() * 256);

    let red = random();
    let green = random();
    let blue = random();

    return `rgb(${red},${green},${blue})`;
  } else {
    return color;
  }
}


function createCells(cellsNumber) {
  for (i = 0; i < cellsNumber ** 2; i++) {
    let newCell = document.createElement("div");
    newCell.className = "cell";
    container.appendChild(newCell);
    newCell.addEventListener("mouseover", function () {
      newCell.style.backgroundColor = getColor();
      console.log(newCell.style.backgroundColor);
    });
  }
}

createCells(16);

clearButton.addEventListener("click", function () {
    clearCells();
  });

blackButton.addEventListener("click", function() {
    color = "black";
});

colorButton.addEventListener("click", function () {
    color = "random";
  });
  
colorPalette.addEventListener("change", function () {
    color = colorPalette.value;
  });
  

eraseButton.addEventListener("click", function() {
      color = "white";
  });
  
  changeInput.addEventListener("change", function () {
    let userInput = changeInput.value;
    clearGrid(container.children.length);
    container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    createCells(userInput);
  });
