// Funkcja do generowania losowego koloru w formacie #RRGGBB
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const widget = document.querySelector(".widget");
const colorSpan = document.querySelector(".color");

if (button && widget && colorSpan) {
  button.addEventListener("click", function () {
    const randomColor = getRandomHexColor();
    widget.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
  });
}
