const categoriesList = document.querySelector("#catergories");
const categoriesItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItem.length}`);

const ulElement = document.querySelector("#categories");
const items = document.querySelectorAll("li.item");
items.forEach((document) => {
  const title = document.querySelector("h2").textContent;
  const elementCategory = document.querySelectorAll("li");
  const numberOfItems = elementCategory.length;
  console.log("Category: " + title);
  console.log("Elements: " + numberOfItems);
});
