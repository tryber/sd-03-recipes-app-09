export const fetchDrinks = async () => {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const json = await request.json();
  return json;
};

export const fetchDrinkByIngredient = async (ingredient) => {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const json = await request.json();
  return json;
};

export const fetchDrinkByRecipeName = async (recipeName) => {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${recipeName}`);
  const json = await request.json();
  return json;
};
export const fetchDrinkByFirstLetter = async (firstLetter) => {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const json = await request.json();
  return json;
};

export const fetchDrinkCategories = async () => {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const json = await request.json();
  return json;
};

export const fetchDrinksByCategory = async (category) => {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  const json = await request.json();
  return json;
};

export const fetchDrinkById = async (id) => {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const json = await request.json();
  return json;
};

export const fetchRandomDrink = async () => {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const json = await request.json();
  return json;
};
