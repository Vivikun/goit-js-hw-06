// Pobierz referencje do przycisków i elementu, który wyświetla wartość licznika
const increaseButton = document.querySelector(
  'button[data-action="increment"]'
);
const decreaseButton = document.querySelector(
  'button[data-action="decrement"]'
);
const counterElement = document.getElementById("value");
let counterValue = 0;

function incrementCounter() {
  counterValue++;
  updateCounter();
}

function decrementCounter() {
  counterValue--;
  updateCounter();
}

function updateCounter() {
  counterElement.textContent = counterValue;
}

increaseButton.addEventListener("click", incrementCounter);
decreaseButton.addEventListener("click", decrementCounter);
