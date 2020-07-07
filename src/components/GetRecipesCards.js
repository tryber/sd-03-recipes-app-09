import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import RecipesContext from '../contexts/RecipesContext';

function GetRecipesCards() {
  const { mealsData, drinksData } = useContext(RecipesContext);
  const { pathname } = useLocation();

  if (pathname.includes('comidas') && mealsData) {
    return mealsData.map((recipe, index) =>
      (index < 12 ? (
        <RecipeCard
          key={recipe.idMeal}
          imgSrc={recipe.strMealThumb}
          name={recipe.strMeal}
          id={recipe.idMeal}
          index={index}
          path="comidas"
        />
      ) : undefined),
    );
  } else if (pathname.includes('bebidas') && drinksData) {
    return drinksData.map((recipe, index) =>
      (index < 12 ? (
        <RecipeCard
          key={recipe.idDrink}
          imgSrc={recipe.strDrinkThumb}
          name={recipe.strDrink}
          id={recipe.idDrink}
          index={index}
          path="bebidas"
        />
      ) : undefined),
    );
  }
  return <div />;
}

export default GetRecipesCards;
