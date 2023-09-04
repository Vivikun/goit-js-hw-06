// Napisz skrypt, który reaguje na zmianę wartości elementu input#font-size-control (zdarzenie input)
// i zmienia styl inline span#text aktualizując właściwość font - size.W rezultacie, podczas zmiany wartości suwakiem, ma zmieniać się rozmiar tekstu w elemencie span

const inputElement = document.getElementById("font-size-control");
const textElement = document.getElementById("text");
inputElement.addEventListener("input", function () {
  const fontSize = this.value + "px";
  textElement.style.fontSize = fontSize;
});
