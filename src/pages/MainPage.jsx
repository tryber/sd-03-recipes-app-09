import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesContext from '../contexts/RecipesContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import { fetchMeals } from '../services/ServiceMeals';
import { fetchDrinks } from '../services/ServiceDrinks';
import RedirectFunc from '../data/RedirectFunc';

const MealsPage = () => {
  const { mealsData, setMealsData, drinksData, setDrinksData } = useContext(
    RecipesContext
  );
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/bebidas') {
      fetchDrinks().then(({ drinks }) => setDrinksData(drinks));
    }
    fetchMeals().then(({ meals }) => setMealsData(meals));
  }, []);

  // useEffect(() => {
  //   if (pathname === '/bebidas') {
  //     fetchDrinks().then(({ drinks }) => setDrinksData(drinks));
  //   }
  //   fetchMeals().then(({ meals }) => setMealsData(meals));
  // }, [toggleSearchBar]);

  const getRecipesCards = () => {
    if (pathname === '/comidas' && mealsData) {
      return mealsData.map((recipe, index) =>
        index < 12 ? (
          <RecipeCard
            key={recipe.idMeal}
            imgSrc={recipe.strMealThumb}
            name={recipe.strMeal}
            id={recipe.idMeal}
          />
        ) : undefined
      );
    } else if (pathname === '/bebidas' && drinksData) {
      return drinksData.map((recipe, index) =>
        index < 12 ? (
          <RecipeCard
            key={recipe.idDrink}
            imgSrc={recipe.strDrinkThumb}
            name={recipe.strDrink}
            id={recipe.idDrink}
          />
        ) : undefined
      );
    }
  };

  if (
    (pathname === '/comidas' && mealsData && mealsData.length > 1) ||
    (pathname === '/bebidas' && drinksData && drinksData.length > 1)
  ) {
    return (
      <div>
        <Header />
        <div>{getRecipesCards()}</div>
        <Footer />
      </div>
    );
  } else if (
    (pathname === "/comidas" && mealsData && mealsData.length === 1) ||
    (pathname === "/bebidas" && drinksData && drinksData.length === 1)
  ) {
    return RedirectFunc();
  }
  return <p>Loading...</p>;
};

export default MealsPage;
