import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    const recipeInProgress =
      startedCocktails.some((recipeId) => recipeId === id) ||
      startedMeals.some((recipeId) => recipeId === id);
    return recipeInProgress;
  }
  return false;
};

const DetailsButton = ({ id }) => {
  const { pathname } = useLocation();
  const path = pathname.includes('/comidas') ? '/comidas' : '/bebidas';
  return isRecipeDone(id) ? null : (
    <div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        style={{ position: 'fixed', bottom: '0px' }}
      >
        <Link to={`${path}/${id}/in-progress`}>
          {!isRecipeInProgress(id) ? 'Iniciar Receita' : 'Continuar Receita'}
        </Link>
      </button>
    </div>
  );
};

DetailsButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailsButton;
