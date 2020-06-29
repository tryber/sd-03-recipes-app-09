import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMealCategories } from '../services/ServiceMeal';
import { fetchDrinkCategories } from '../services/ServiceDrinks';
import RecipesContext from '../contexts/RecipesContext';

const renderFilterButtons = (categories) => {
  if (categories.length === 0) return null;
  return categories.map((category, i) => {
    if (i > 5) return null;
    return (
      <button type="button">
        {category.strCategory}
      </button>
    );
  });
};

const Filters = () => {
  const {
    mealsCategories,
    setMealsCategories,
    drinksCategories,
    setDrinksCategories,
  } = useContext(RecipesContext);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/bebidas') {
      fetchDrinkCategories()
        .then((response) => console.log(response));
    }
    fetchMealCategories().then((response) => setMealsCategories(response.meals));
  }, []);

  return (
    <div>
      {console.log(drinksCategories)}
    </div>
  );
};

export default Filters;
