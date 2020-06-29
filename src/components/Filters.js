import React, { useEffect, useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { fetchMealCategories } from '../services/ServiceMeal';
import { fetchDrinkCategories } from '../services/ServiceDrinks';
import RecipesContext from '../contexts/RecipesContext';

const renderFilterButtons = ({ categories }) => {
  const categoriesArr = [...categories];
  categoriesArr.map((category, i) => {
    if (i > 5) return null;
    return (
      <button type="button">
        {category}
      </button>
    );
  });
};

const Filters = () => {
  const { mealsCategories, drinksCategories } = useContext(RecipesContext);
  const { match: { url } } = useRouteMatch();
  useEffect(() => {
  }, []);

  return (
    <div>
      {url}
    </div>
  );
};

export default Filters;
