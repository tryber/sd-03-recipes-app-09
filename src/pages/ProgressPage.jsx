import React, { useContext } from 'react';

import RecipesContext from '../contexts/RecipesContext';

const ProgressPage = () => {
  const { mealsData, drinksData } = useContext(RecipesContext);
  return (
    <p>ProgressPage</p>
  );
};

export default ProgressPage;
