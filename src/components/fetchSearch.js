import {
  fetchMealByIngredient,
  fetchMealByRecipeName,
  fetchMealByFirstLetter,
} from '../services/ServiceMeal';
import {
  fetchDrinkByIngredient,
  fetchDrinkByRecipeName,
  fetchDrinkByFirstLetter,
} from '../services/ServiceDrinks';

export const fetchMeals = (setMealsData, selectedRadio, inputText) => {
  if (selectedRadio === 'Ingredientes')
    return fetchMealByIngredient(inputText).then(({ meals }) =>
      setMealsData(meals)
    );
  if (selectedRadio === 'Nome')
    return fetchMealByRecipeName(inputText).then(({ meals }) =>
      setMealsData(meals)
    );
  return fetchMealByFirstLetter(inputText).then(({ meals }) =>
    setMealsData(meals)
  );
};

export const fetchDrinks = (setDrinksData, selectedRadio, inputText) => {
  if (selectedRadio === 'Ingredientes')
    return fetchDrinkByIngredient(inputText).then(({ drinks }) =>
      setDrinksData(drinks)
    );
  if (selectedRadio === 'Nome')
    return fetchDrinkByRecipeName(inputText).then(({ drinks }) =>
      setDrinksData(drinks)
    );
  return fetchDrinkByFirstLetter(inputText).then(({ drinks }) =>
    setDrinksData(drinks)
  );
};
