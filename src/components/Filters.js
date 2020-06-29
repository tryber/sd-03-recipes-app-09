import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMealCategories, fetchMealsByCategory, fetchMeals } from '../services/ServiceMeal';
import { fetchDrinkCategories, fetchDrinksByCategory, fetchDrinks } from '../services/ServiceDrinks';
import RecipesContext from '../contexts/RecipesContext';

const Filters = () => {
  const {
    setMealsData,
    setDrinksData,
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

  const disableFilters = () => {
    if (pathname === '/bebidas') {
      return fetchDrinks()
        .then((result) => setDrinksData(result.drinks));
    }
    return fetchMeals()
      .then((result) => setMealsData(result.meals));
  };

  const filterDataByCategory = (category) => {
    if (pathname === '/bebidas') {
      if (category === selectedCategory) {
        setSelectedCategory('All');
        return disableFilters();
      }
      return fetchDrinksByCategory(category)
        .then((result) => setDrinksData(result.drinks))
        .then(() => setSelectedCategory(category));
    }
    if (category === selectedCategory) {
      setSelectedCategory('All');
      return disableFilters();
    }
    return fetchMealsByCategory(category)
      .then((result) => setMealsData(result.meals))
      .then(() => setSelectedCategory(category));
  };

  const renderFilterButtons = (categories) => {
    if (categories.length === 0) return null;
    return (
      <div>
        <button onClick={disableFilters} type="button">All</button>
        {categories.map((category, i) => {
          if (i > 4) return null;
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
