import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import RecipesContext from '../contexts/RecipesContext';

const isRecipeDone = (id) => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (doneRecipes) {
    return doneRecipes.some((recipe) => recipe.id === id);
  }
  return false;
};

const isRecipeInProgress = (id) => {
  const startedRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (startedRecipes) {
    const startedCocktails = Object.keys(startedRecipes.cocktails);
    const startedMeals = Object.keys(startedRecipes.meals);
    const recipeInProgress = startedCocktails.some((recipeId) => recipeId === id)
      || startedMeals.some((recipeId) => recipeId === id);
    return recipeInProgress;
  }
  return false;
};

const DetailsButton = () => {
  const { mealsData, drinksData } = useContext(RecipesContext);
  const { pathname } = useLocation();
  const path = pathname.includes('/comidas') ? '/comidas' : '/bebidas';
  const id = pathname.includes('/comidas') ? mealsData.id : drinksData.id;
  return (
    isRecipeDone(id) ? null
      : (
        <div className="button-wrapper">
          <button className="button is-danger details-button is-medium" type="button" data-testid="start-recipe-btn">
            <Link className="details-button-link" to={`${path}/${id}/in-progress`}>
              {!isRecipeInProgress(id) ? 'Iniciar Receita' : 'Continuar Receita'}
            </Link>
          </button>
        </div>
      )
  );
};

export default DetailsButton;
