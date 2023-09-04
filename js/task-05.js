const inputElement = document.getElementById("name-input");
const outputElement = document.getElementById("name-output");

inputElement.addEventListener("input", function () {
  if (inputElement.value.trim() === "") {
    outputElement.textContent = "Anonymous";
  } else {
    outputElement.textContent = inputElement.value;
  }
});
