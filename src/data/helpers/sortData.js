const filterDataForIngredients = (data) => {
  const entries = Object.entries(data);
  const ingredients = entries.filter((entry) => entry[0].includes('Ingredient'));
  const nonEmptyIngredients = ingredients.filter((entry) => typeof entry[1] === 'string');
  const ingredientList = nonEmptyIngredients.map((entry) => entry[1]);
  return ingredientList;
};

const filterDataForMeasureValues = (data) => {
  const entries = Object.entries(data);
  const measures = entries.filter((entry) => entry[0].includes('Measure'));
  const nonEmptyMeasures = measures.filter((entry) => typeof entry[1] === 'string');
  const measureValues = nonEmptyMeasures.map((entry) => entry[1]);
  return measureValues;
};

const createIngredientsAndMeasuresList = (data) => {
  const ingredientList = filterDataForIngredients(data);
  const measureValues = filterDataForMeasureValues(data);
  const ingredientsWithMeasures = ingredientList.map(
    (ingredient, i) => `${ingredient} ${measureValues[i]}`,
  );
  return ingredientsWithMeasures;
};

const createMealObject = (data, ingredients) => {
  const mealObject = {
    name: data.strMeal,
    image: data.strMealThumb,
    category: data.strCategory,
    instructions: data.strInstructions,
    ingredients,
    video: data.strYoutube,
  };
  return mealObject;
};

const createDrinkObject = (data, ingredients) => {
  const drinkObject = {
    name: data.strDrink,
    image: data.strDrinkThumb,
    category: data.strAlcoholic,
    instructions: data.strInstructions,
    ingredients,
    video: false,
  };
  return drinkObject;
};

export const sortMealData = (data) => {
  const ingredients = createIngredientsAndMeasuresList(data);
  const sortedData = createMealObject(data, ingredients);
  return sortedData;
};

export const sortDrinkData = (data) => {
  const ingredients = createIngredientsAndMeasuresList(data);
  const sortedData = createDrinkObject(data, ingredients);
  return sortedData;
};
