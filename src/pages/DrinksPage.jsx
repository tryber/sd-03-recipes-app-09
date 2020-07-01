import React, { useContext, useEffect } from 'react';
import RecipesContext from '../contexts/RecipesContext';
import { fetchDrinks, fetchDrinksByCategory } from '../services/ServiceDrinks';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GetRecipesCards from '../components/GetRecipesCards';
import RedirectFunc from '../data/RedirectFunc';
import Filters from '../components/Filters';

const DrinksPage = () => {
  const { drinksData, setDrinksData, toggleSearchBar, selectedCategory } = useContext(
    RecipesContext
  );

  useEffect(() => {
    fetchDrinks().then(({ drinks }) => setDrinksData(drinks));
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') fetchDrinks().then(({ drinks }) => setDrinksData(drinks));
    fetchDrinksByCategory(selectedCategory).then(({ drinks }) => setDrinksData(drinks));
  }, [selectedCategory]);

  if (drinksData && drinksData.length === 1) {
    return <RedirectFunc id={drinksData[0].idDrink} />;
  } else if (toggleSearchBar && drinksData.length === 0) {
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros');
  }
  return (
    <div>
      <Header />
      <Filters />
      <GetRecipesCards />
      <Footer />
    </div>
  );
};

export default DrinksPage;