import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMealCategories, fetchMealsByCategory } from '../services/ServiceMeal';
import { fetchDrinkCategories, fetchDrinksByCategory } from '../services/ServiceDrinks';
import RecipesContext from '../contexts/RecipesContext';

const Filters = () => {
  const {
    mealsData,
    setMealsData,
    drinksData,
    setDrinksData,
    mealsCategories,
    setMealsCategories,
    drinkCategories,
    setDrinksCategories,
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

  const filterDataByCategory = (category) => {
    if (pathname === '/bebidas') {
      return fetchDrinksByCategory(category)
        .then((result) => setMealsData(result.drinks));
    }
    return fetchMealsByCategory(category)
      .then((result) => setDrinksData(result.meals));
  };

  const renderFilterButtons = (categories) => {
    if (categories.length === 0) return null;
    return (
      <div>
        <button type="button">All</button>
        {categories.map((category, i) => {
          if (i > 5) return null;
          return (
            <button
              data-testid={`${category.strCategory}-category-filter`}
              type="button"
              onClick={() => filterDataByCategory(category.strCategory)}
            >
              {category.strCategory}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      {renderFilterButtons(pathname === '/comidas'
        ? mealsCategories : drinkCategories)}
    </div>
  );
};

export default Filters;
