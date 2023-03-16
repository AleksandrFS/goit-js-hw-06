const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredientsRef = document.querySelector("#ingredients");

const createListOfIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const elementRef = document.createElement('li');
    elementRef.textContent = ingredient;
    elementRef.classList.add('item');
    return elementRef;
  })
};

const elements = createListOfIngredients(ingredients);
listOfIngredientsRef.after(...elements);

