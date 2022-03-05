const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
button.addEventListener("click", changeColor);

function changeColor() {
  let color = document.getElementById("color");

  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[generateColor()];
  }

  document.body.style.backgroundColor = hexColor;
  color.innerText = hexColor;
}
function generateColor() {
  return Math.floor(Math.random() * hex.length);
}
