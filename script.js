let btn1 = document.querySelector("#btn1");
let numberSquares = 0;

btn1.addEventListener("click", () => {
  let value = prompt("Enter the number of squares per side for the new grid: ");
  if (value <= 100) {
    numberSquares = value;
  } else {
    alert("Please, enter a number less or equal to 100");
  }
});

let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", createGrid);
btn2.addEventListener("click", overMouse);

let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => window.location.reload());

function createGrid() {
  for (let i = 0; i < numberSquares * numberSquares; i++) {
    let tile = document.createElement("p");
    tile.id = i;
    tile.classList.add("tile");
    tile.style.width = ((600 - 2 * (numberSquares)) / numberSquares) + "px";
    tile.style.height = ((600 - 2 * (numberSquares)) / numberSquares) + "px";
    document.getElementById("grid").appendChild(tile);
  }
}

function overMouse() {
  let tiles = document.querySelectorAll("p");
  tiles.forEach((tile) => {
    tile.addEventListener("mouseover", () => {
      tile.classList.add("mousehov");
    });
  });
}