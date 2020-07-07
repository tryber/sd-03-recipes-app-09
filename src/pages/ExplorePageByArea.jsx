import React, { useEffect, useState } from 'react';

import { fetchMeals } from '../services/ServiceMeals';
import FilterByRegion from '../data/FilterByRegion';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AreaOptions from '../components/AreaOptions';

export default function ExplorePageByArea() {
  const [recipes, setRecipesData] = useState([]);
  const [region, setRegion] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('All');

  const updateState = (recipe) => {
    let treatment = [];
    recipe.map((meal, index) => {
      if (index < 12) treatment = [...treatment, meal];
      return treatment;
    });
    return treatment;
  };

  const getMeals = async () => {
    const { meals } = await fetchMeals();
    const twelveRequest = await updateState(meals);
    const uniqueAreas = [
      ...new Set(
        twelveRequest.reduce((acc, { strArea }) => [...acc, strArea], []),
      ),
    ];
    setRecipesData([...twelveRequest]);
    setRegion([...uniqueAreas]);
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <div>
      <Header />
      {region && region.length > 1 ? (
        <AreaOptions areas={region} handleChange={setSelectedRegion} />
      ) : (
        <p>Carregando...</p>
      )}
      {recipes && FilterByRegion(recipes, selectedRegion)}
      <Footer />
    </div>
  );
}
