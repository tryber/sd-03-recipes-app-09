import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMealCategories } from '../services/ServiceMeal';
import { fetchDrinkCategories } from '../services/ServiceDrinks';
import RecipesContext from '../contexts/RecipesContext';

const Filters = () => {
  const {
    mealsCategories,
    setMealsCategories,
    drinkCategories,
    setDrinksCategories,
    selectedCategory,
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

  const renderFilterButtons = (categories) => {
    if (categories.length === 0) return null;
    return (
      <div>
        <button onClick={(e) => setSelectedCategory(e.target.value)} type="button">All</button>
        {categories.map((category, i) => {
          if (i > 4) return null;
          return (
            <button
              data-testid={`${category.strCategory}-category-filter`}
              type="button"
              value={category.strCategory}
              onClick={(e) => setSelectedCategory(e.target.value)}
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
      {console.log(selectedCategory)}
    </div>
  );
};

export default Filters;
