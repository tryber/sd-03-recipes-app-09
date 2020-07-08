import React, { useEffect, useState } from 'react';

import { fetchMeals, fetchFilterByArea } from '../services/ServiceMeals';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AreaOptions from '../components/AreaOptions';
import RecipeCard from '../components/RecipeCard';

export default function ExplorePageByArea() {
  const [recipes, setRecipesData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const getMeals = async (region) => {
    if (region === 'All') {
      const { meals } = await fetchMeals();
      return setRecipesData([...meals.map((meal) => meal).slice(0, 12)]);
    }

    if (region !== 'All') {
      const { meals } = await fetchFilterByArea(region);
      return setFilteredRecipes([...meals.map((meal) => meal).slice(0, 12)]);
    }

    return null;
  };

  const mountDefault = (arrMeals) => (
    arrMeals.map((meal, index) => (
      <RecipeCard
        key={meal.idMeal}
        imgSrc={meal.strMealThumb}
        name={meal.strMeal}
        id={meal.idMeal}
        index={index}
        path="comidas"
      />
    ))
  );

  useEffect(() => {
    getMeals(selectedRegion);
  }, [selectedRegion]);

  return (
    <div>
      <Header />
      <AreaOptions handleChange={setSelectedRegion} />
      {selectedRegion === 'All' && recipes.length > 1 ? mountDefault(recipes) : null}
      {selectedRegion !== 'All' && filteredRecipes.length > 1 ? mountDefault(filteredRecipes) : null}
      <Footer />
    </div>
  );
}
