import React, { useContext, useEffect } from 'react';
import RecipesContext from '../contexts/RecipesContext';
import { fetchMeals, fetchMealsByCategory } from '../services/ServiceMeals';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GetRecipesCards from '../components/GetRecipesCards';
import RedirectFunc from '../data/RedirectFunc';
import Filters from '../components/Filters';

const MealsPage = () => {
  const {
    mealsData,
    setMealsData,
    toggleSearchBar,
    selectedCategory,
    isIngredient,
  } = useContext(RecipesContext);

  useEffect(() => {
    if (isIngredient === false) {
      if (selectedCategory === 'All') {
        fetchMeals().then(({ meals }) => setMealsData(meals), setMealsData([]));
      } else {
        fetchMealsByCategory(selectedCategory).then(
          ({ meals }) => setMealsData(meals),
          setMealsData([]),
        );
      }
    }
  }, [selectedCategory]);

  if (toggleSearchBar && mealsData && mealsData.length === 1) {
    return <RedirectFunc id={mealsData[0].idMeal} />;
  } else if (toggleSearchBar && mealsData === null) {
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
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

export default MealsPage;
