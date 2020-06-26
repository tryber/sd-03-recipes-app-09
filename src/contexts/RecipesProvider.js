import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [mealsData, setMealsData] = useState([]);
  const [drinksData, setDrinksData] = useState([]);

  const contextValue = {
    toggleSearchBar,
    setToggleSearchBar,
    mealsData,
    setMealsData,
    drinksData,
    setDrinksData,
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
