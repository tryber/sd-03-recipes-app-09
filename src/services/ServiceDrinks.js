export const fetchDrinks = () => fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
  .then((response) => response.json())
  .then((result) => console.log('Drinks fetch 1', result));

export const fetchDrinkCategories = () => fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
  .then((response) => response.json())
  .then((result) => console.log('Drinks fetch 2', result));

export const fetchDrinkById = (id) => fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then((response) => response.json())
  .then((result) => console.log('Drinks fetch 3', result));

export const fetchDrinkByIngredient = (ingredient) => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => response.json())
    .then((result) => console.log('Drinks fetch 4', result));
};

export const fetchDrinkByRecipeName = (recipeName) => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${recipeName}`)
    .then((response) => response.json())
    .then((result) => console.log('Drinks fetch 5', result));
};

export const fetchDrinkByFirstLetter = (firstLetter) => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    .then((response) => response.json())
    .then((result) => console.log('Drinks fetch 6', result));
};

export const fetchRandomDrink = () => fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then((response) => response.json())
  .then((result) => console.log('Drinks fetch 7', result));
