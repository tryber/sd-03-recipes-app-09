import { useContext } from 'react';
import RecipesContext from '../contexts/RecipesContext';

const { setMealsData } = useContext(RecipesContext);

export const fetchMeals = () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  .then((response) => response.json())
  .then((result) => setMealsData(result));

export const fetchMealByIngredient = (ingredient) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
  .then((response) => response.json())
  .then((result) => setMealsData(result));

export const fetchMealByRecipeName = (recipeName) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${recipeName}`)
  .then((response) => response.json())
  .then((result) => setMealsData(result));

export const fetchMealByFirstLetter = (firstLetter) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${firstLetter}`)
  .then((response) => response.json())
  .then((result) => setMealsData(result));

export const fetchMealCategories = () => fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
  .then((response) => response.json())
  .then((result) => console.log(result));

export const fetchMealsByCategory = (category) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  .then((response) => response.json())
  .then((result) => setMealsData(result));

export const fetchMealById = (id) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then((response) => response.json())
  .then((result) => console.log('Meals fetch 3', result));

export const fetchRandomMeal = () => fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then((response) => response.json())
  .then((result) => console.log('Meals fetch 7', result));
