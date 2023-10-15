const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.getElementById("ingredients");
const ingredientsList = ingredients
  .map((ingredient) => `<li>${ingredient}</li>`)
  .join("");

ulIngredients.insertAdjacentHTML("beforeend", ingredientsList);
