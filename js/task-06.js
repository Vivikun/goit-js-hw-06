// Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur)
// sprawdza czy wartość wprowadzona przez użytkownika spełnia warunek walidacji(ma odpowiednią długość)
const inputField = document.getElementById("validation-input");

inputField.addEventListener("blur", validateInput);

function validateInput() {
  var inputValue = inputField.value;
  var minLength = inputField.getAttribute("data-length");
  if (inputValue.length < minLength) {
    inputField.style.borderColor = "red";
  } else {
    inputField.style.borderColor = "green";
  }
}
