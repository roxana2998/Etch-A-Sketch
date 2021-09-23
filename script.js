const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear-button");
const changeInput = document.querySelector(".change-input");
const colorButton = document.querySelector(".color-button");
const colorPalette = document.querySelector(".change-color");
const blackButton = document.querySelector(".black-button");
const eraseButton = document.querySelector(".erase-button");
const grayscaleButton = document.querySelector(".grayscale");
const squaresPara = document.querySelector(".number-squares");

let color = "rgb(0, 0, 0)";
changeInput.value = 16;
let grayscale = false;

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
    newCell.style.backgroundColor = "rgb(255, 255, 255)";
    newCell.addEventListener("mouseover", function () {
      if (grayscale) {
        if (newCell.style.backgroundColor === "rgb(255, 255, 255)") {
          newCell.style.backgroundColor = "rgb(230, 230, 230)";
        } else if (newCell.style.backgroundColor === "rgb(230, 230, 230)") {
          newCell.style.backgroundColor = "rgb(204, 204, 204)";
        } else if (newCell.style.backgroundColor === "rgb(204, 204, 204)") {
          newCell.style.backgroundColor = "rgb(178, 178, 178)";
        } else if (newCell.style.backgroundColor === "rgb(178, 178, 178)") {
          newCell.style.backgroundColor = "rgb(153, 153, 153)";
        } else if (newCell.style.backgroundColor === "rgb(153, 153, 153)") {
          newCell.style.backgroundColor = "rgb(127, 127, 127)";
        } else if (newCell.style.backgroundColor === "rgb(127, 127, 127)") {
          newCell.style.backgroundColor = "rgb(102, 102, 102)";
        } else if (newCell.style.backgroundColor === "rgb(102, 102, 102)") {
          newCell.style.backgroundColor = "rgb(76, 76, 76)";
        } else if (newCell.style.backgroundColor === "rgb(76, 76, 76)") {
          newCell.style.backgroundColor = "rgb(51, 51, 51)";
        } else if (newCell.style.backgroundColor === "rgb(51, 51, 51)") {
          newCell.style.backgroundColor = "rgb(25, 25, 25)";
        } else if (newCell.style.backgroundColor === "rgb(25, 25, 25)") {
          newCell.style.backgroundColor = "rgb(0, 0, 0)";
        } else if (newCell.style.backgroundColor === "rgb(0, 0, 0)") {
          return;
        } else {
          newCell.style.backgroundColor = "rgb(255, 255, 255)";
        }
      } else {
        newCell.style.backgroundColor = getColor();
      }
    });
  }
}

createCells(16);

grayscaleButton.addEventListener("click", function () {
  grayscale = true;
  color = "rgb(255, 255, 255)";
});

clearButton.addEventListener("click", function () {
  clearCells();
});

blackButton.addEventListener("click", function () {
  color = "black";
  grayscale = false;
});

colorButton.addEventListener("click", function () {
  color = "random";
  grayscale = false;
});

colorPalette.addEventListener("change", function () {
  color = colorPalette.value;
  grayscale = false;
});

eraseButton.addEventListener("click", function () {
  color = "rgb(255, 255, 255)";
  grayscale = false;
});

changeInput.addEventListener("change", function () {
  let userInput = changeInput.value;
  squaresPara.textContent = `${userInput} x ${userInput}`;
  clearGrid(container.children.length);
  container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
  createCells(userInput);
});
