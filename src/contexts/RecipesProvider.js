import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [mealsData, setMealsData] = useState(null);
  const [drinksData, setDrinksData] = useState(null);
  const [mealsCategories, setMealsCategories] = useState([]);
  const [drinkCategories, setDrinksCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ingredientFilter, setIngredientFilter] = useState([]);
  const [isIngredient, setIsIngredient] = useState(false);

  const contextValue = {
    toggleSearchBar,
    setToggleSearchBar,
    mealsData,
    setMealsData,
    drinksData,
    setDrinksData,
    mealsCategories,
    setMealsCategories,
    drinkCategories,
    setDrinksCategories,
    selectedCategory,
    setSelectedCategory,
    ingredientFilter,
    setIngredientFilter,
    isIngredient,
    setIsIngredient,
  };

  return (
    <RecipesContext.Provider value={contextValue}>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
