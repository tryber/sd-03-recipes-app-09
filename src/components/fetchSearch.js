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
    return fetchMealByIngredient(inputText).then((result) =>
      setMealsData(result)
    );
  if (selectedRadio === 'Nome')
    return fetchMealByRecipeName(inputText).then((result) =>
      setMealsData(result)
    );
  return fetchMealByFirstLetter(inputText).then((result) =>
    setMealsData(result)
  );
};

export const fetchDrinks = (setDrinkData, selectedRadio, inputText) => {
  if (selectedRadio === 'Ingredientes')
    return fetchDrinkByIngredient(inputText).then((result) =>
      console.log(result)
    );
  if (selectedRadio === 'Nome')
    return fetchDrinkByRecipeName(inputText).then((result) =>
      setDrinkData(result)
    );
  return fetchDrinkByFirstLetter(inputText).then((result) =>
    setDrinkData(result)
  );
};
