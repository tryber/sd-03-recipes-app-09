import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import RecipesContext from '../contexts/RecipesContext';

function GetRecipesCards() {
  const { mealsData, drinksData } = useContext(RecipesContext);
  const { pathname } = useLocation();
  if (pathname === '/comidas' && mealsData) {
    return mealsData.map((recipe, index) => {
      return index < 12 ? (
        <RecipeCard
          key={recipe.idMeal}
          imgSrc={recipe.strMealThumb}
          name={recipe.strMeal}
          id={recipe.idMeal}
        />
      ) : undefined;
    });
  } else if (pathname === '/bebidas' && drinksData) {
    return drinksData.map((recipe, index) => {
      return index < 12 ? (
        <RecipeCard
          key={recipe.idDrink}
          imgSrc={recipe.strDrinkThumb}
          name={recipe.strDrink}
          id={recipe.idDrink}
        />
      ) : undefined;
    });
  }
  return <div />;
}

export default GetRecipesCards;
