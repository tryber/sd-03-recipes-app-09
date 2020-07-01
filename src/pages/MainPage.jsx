import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesContext from '../contexts/RecipesContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GetRecipesCards from '../components/GetRecipesCards';
import { fetchMeals } from '../services/ServiceMeals';
import { fetchDrinks } from '../services/ServiceDrinks';
import RedirectFunc from '../data/RedirectFunc';

const MealsPage = () => {
  const {
    mealsData,
    setMealsData,
    drinksData,
    setDrinksData,
    toggleSearchBar,
  } = useContext(RecipesContext);
  const { pathname } = useLocation();
  const mealsCondition = pathname === '/comidas' && mealsData;
  const drinksCondition = pathname === '/bebidas' && drinksData;

  useEffect(() => {
    if (pathname === '/bebidas') {
      fetchDrinks().then(({ drinks }) => setDrinksData(drinks));
    }
    fetchMeals().then(({ meals }) => setMealsData(meals));
  }, [pathname, toggleSearchBar]);

  if (
    (mealsCondition && mealsData.length === 1) ||
    (drinksCondition && drinksData.length === 1)
  ) {
    return RedirectFunc();
  } else if (mealsData === null || drinksData === null) {
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros');
  }
  return (
    <div>
      <Header />
      <GetRecipesCards />
      <Footer />
    </div>
  );
};

export default MealsPage;
