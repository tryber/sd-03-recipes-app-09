import {
  fetchMealsByIngredient,
  fetchMealsByRecipeName,
  fetchMealsByFirstLetter,
} from '../services/ServiceMeals';
import {
  fetchDrinksByIngredient,
  fetchDrinksByRecipeName,
  fetchDrinksByFirstLetter,
} from '../services/ServiceDrinks';

export const fetchMeals = (setMealsData, selectedRadio, inputText) => {
  if (selectedRadio === 'Ingredientes') {
    return fetchMealsByIngredient(inputText).then(({ meals }) =>
      setMealsData(meals),
    );
  } else if (selectedRadio === 'Nome') {
    return fetchMealsByRecipeName(inputText).then(({ meals }) =>
      setMealsData(meals),
    );
  }
  return fetchMealsByFirstLetter(inputText).then(({ meals }) =>
    setMealsData(meals),
  );
};

export const fetchDrinks = (setDrinksData, selectedRadio, inputText) => {
  if (selectedRadio === 'Ingredientes') {
    return fetchDrinksByIngredient(inputText).then(({ drinks }) =>
      setDrinksData(drinks),
    );
  } else if (selectedRadio === 'Nome') {
    return fetchDrinksByRecipeName(inputText).then(({ drinks }) =>
      setDrinksData(drinks),
    );
  }
  return fetchDrinksByFirstLetter(inputText).then(({ drinks }) =>
    setDrinksData(drinks),
  );
};
