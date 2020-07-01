export const fetchMeals = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const json = await request.json();
  return json;
};

export const fetchMealsByIngredient = async (ingredient) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const json = await request.json();
  return json;
};

export const fetchMealsByRecipeName = async (recipeName) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${recipeName}`);
  const json = await request.json();
  return json;
};

export const fetchMealsByFirstLetter = async (firstLetter) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${firstLetter}`);
  const json = await request.json();
  return json;
};

export const fetchMealsCategories = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const json = await request.json();
  return json;
};

export const fetchMealsByCategory = async (category) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const json = await request.json();
  return json;
};

export const fetchMealById = async (id) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const json = await request.json();
  return json;
};

export const fetchRandomMeal = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const json = await request.json();
  return json;
};
