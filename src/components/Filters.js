import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMealCategories } from '../services/ServiceMeal';
import { fetchDrinkCategories } from '../services/ServiceDrinks';
import RecipesContext from '../contexts/RecipesContext';

const renderFilterButtons = (categories, handler) => {
  if (categories.length === 0) return null;
  return (
    <div>
      <button onClick={(e) => handler(e.target.value)} type="button">All</button>
      {categories.map((category, i) => (
        i > 4 ? null
          : (
            <button
              data-testid={`${category.strCategory}-category-filter`}
              type="button"
              value={category.strCategory}
              onClick={(e) => handler(e.target.value)}
            >
              {category.strCategory}
            </button>
          )))}
    </div>
  );
};

const Filters = () => {
  const {
    mealsCategories,
    setMealsCategories,
    drinkCategories,
    setDrinksCategories,
    setSelectedCategory,
  } = useContext(RecipesContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/bebidas') {
      fetchDrinkCategories()
        .then((response) => setDrinksCategories(response.drinks));
    }
    fetchMealCategories()
      .then((response) => setMealsCategories(response.meals));
  }, []);

  return (
    <div>
      {pathname === '/comidas'
        ? renderFilterButtons(mealsCategories, setSelectedCategory)
        : renderFilterButtons(drinkCategories, setSelectedCategory)}
    </div>
  );
};

export default Filters;
