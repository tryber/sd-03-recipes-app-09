import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMealsCategories } from '../services/ServiceMeals';
import { fetchDrinksCategories } from '../services/ServiceDrinks';
import RecipesContext from '../contexts/RecipesContext';

const handler = (setSelectedCategory, value) => (
  setSelectedCategory((state) => (value !== state ? value : 'All'))
);

const renderFilterButtons = (categories, setSelectedCategory) => {
  if (categories.length === 0) return null;
  return (
    <div>
      <button
        onClick={(e) => handler(setSelectedCategory, e.target.value)}
        type="button"
        data-testid="All-category-filter"
        value="All"
      >
        All
      </button>
      {categories.map(({ strCategory }, i) => (i > 4 ? null : (
        <button
          key={strCategory}
          data-testid={`${strCategory}-category-filter`}
          type="button"
          value={strCategory}
          onClick={(e) => handler(setSelectedCategory, e.target.value)}
        >
          {strCategory}
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
      fetchDrinksCategories().then((response) => setDrinksCategories(response.drinks));
    } else fetchMealsCategories().then((response) => setMealsCategories(response.meals));
  }, []);

  return (
    <div>
      {pathname === '/comidas'
        ? renderFilterButtons(
          mealsCategories,
          setSelectedCategory,
        )
        : renderFilterButtons(
          drinkCategories,
          setSelectedCategory,
        )}
    </div>
  );
};

export default Filters;
