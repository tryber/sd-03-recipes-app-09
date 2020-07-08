import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [mealsData, setMealsData] = useState([]);
  const [drinksData, setDrinksData] = useState([]);
  const [mealsCategories, setMealsCategories] = useState([]);
  const [drinkCategories, setDrinksCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ingredientFilter, setIngredientFilter] = useState([]);

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
