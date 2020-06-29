import React, { useContext } from 'react';
import RecipesContext from '../contexts/RecipesContext';
import RecipeCard from '../components/RecipeCard';
import { useEffect } from 'react';
import { fetchMeals } from '../services/ServiceMeal';

const MealsPage = () => {
  const { mealsData, setMealsData } = useContext(RecipesContext);

  useEffect(() => {
    fetchMeals().then(({ meals }) => setMealsData(meals));
  });

  if (mealsData) {
    return mealsData.map((recipe) => (
      <RecipeCard
        key={recipe.idMeal}
        imgSrc={recipe.strMealThumb}
        name={recipe.strMeal}
        id={recipe.idMeal}
        recipe={recipe}
      />
    ));
  }
  return <p>Loading...</p>;
};

export default MealsPage;
//foto (strMealThumb ou strDrinkThumb) e seu nome (strMeal ou strDrink).
