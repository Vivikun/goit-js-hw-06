const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// ingredients.forEach((name) => {
//   const newElement = document.createElement("li");
//   newElement.textContent = name;
//   newElement.classList.add("item");
//   document.querySelector("#ingredients").appendChild(newElement);
// });

const ingredientsArr = ingredients.map((ingredient) => {
  const newElement = document.createElement("li");
  newElement.textContent = ingredient;
  return newElement;
});

const myList = document.getElementById("ingredients");
myList.append(...ingredientsArr);
