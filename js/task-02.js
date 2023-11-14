const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrOfIngredients = ingredients.map(ingredient => {

  const listItem = document.createElement('li');

  listItem.textContent = ingredient;
  listItem.classList.add('item');

  return listItem
})

const list = document.getElementById("ingredients");

list.append(...arrOfIngredients);