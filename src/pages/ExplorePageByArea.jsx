import React, { useEffect, useState } from 'react';

import { fetchMeals } from '../services/ServiceMeals';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AreaOptions from '../components/AreaOptions';
import RecipeCard from '../components/RecipeCard';

export default function ExplorePageByArea() {
  const [recipes, setRecipesData] = useState([]);
  const [region, setRegion] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('All');

  const updateState = (recipe) => {
    let treatment = [];
    recipe.map((meal, index) => {
      if (index < 12) {
        treatment = [...treatment, meal];
      }
    });

    return treatment;
  };

  const getMeals = async () => {
    const { meals } = await fetchMeals();
    const twelveRequest = await updateState(meals);
    const areas = twelveRequest.reduce(
      (acc, { strArea }) => [...acc, strArea],
      []
    );
    const uniqueAreas = [...new Set(areas)];
    setRecipesData([...twelveRequest]);
    setRegion([...uniqueAreas]);
  };

  const filterByRegion = () => {
    let theRealDeal = null;
    if (selectedRegion !== 'All') {
      theRealDeal = recipes.filter(({ strArea }) => strArea === selectedRegion);
    } else {
      theRealDeal = recipes;
    }

    return theRealDeal.map((recipe, index) => (
      <RecipeCard
        key={recipe.idMeal}
        imgSrc={recipe.strMealThumb}
        name={recipe.strMeal}
        id={recipe.idMeal}
        index={index}
        path="comidas"
      />
    ));
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <>
      <Header />
      {region && region.length > 1 ? (
        <AreaOptions areas={region} handleChange={setSelectedRegion} />
      ) : (
        <p>Carregando...</p>
      )}
      {recipes && filterByRegion()}
      <Footer />
    </>
  );
}
