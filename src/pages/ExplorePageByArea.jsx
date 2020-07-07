import React, { useEffect, useState } from "react";

import { fetchMeals } from "../services/ServiceMeals";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ExplorePageByArea() {
  const [recipes, setRecipesData] = useState([]);
  const [region, setRegion] = useState([]);

  const updateState = (recipes) => {
    let treatment = [];
    recipes.map((meal, index) => {
      if (index < 12) {
        treatment = [...treatment, meal];
      }
    });

    return treatment;
  };

  const getMeals = async () => {
    const { meals } = await fetchMeals();
    const twelveRequest = await updateState(meals);
    const areas = twelveRequest.reduce((acc, { strArea }) => [...acc, strArea], []);
    const uniqueAreas = [...new Set(areas)];
    setRecipesData([...twelveRequest]);
    setRegion([...uniqueAreas]);
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <>
      <Header />
      {}
      <Footer />
    </>
  );
}
