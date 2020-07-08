import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMeals } from '../services/ServiceMeals';
import { fetchDrinks } from '../services/ServiceDrinks';
import { sortMealData, sortDrinkData } from '../data/helpers/sortData';
import RecommendationCard from './RecommendationCard';

const DetailsRecommended = () => {
  const { pathname } = useLocation();
  const [recommended, setRecommended] = useState(undefined);

  useEffect(() => {
    if (pathname.includes('/comidas')) {
      fetchDrinks()
        .then((response) => response.drinks.slice(0, 6))
        .then((response) => response.map((drink) => sortDrinkData(drink)))
        .then((result) => setRecommended(result));
    }
    if (pathname.includes('/bebidas')) {
      fetchMeals()
        .then((response) => response.meals.slice(0, 6))
        .then((response) => response.map((meal) => sortMealData(meal)))
        .then((result) => setRecommended(result));
    }
  }, [pathname]);
  if (recommended) {
    return (
      <div>
        <h2>Recomendados</h2>
        <div className="recommended-carousel">
          {recommended.map((recipe, index) => (
            <RecommendationCard
              key={recipe.id}
              name={recipe.name}
              image={recipe.image}
              category={recipe.category}
              id={recipe.id}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  }
  return <p>carregando lista de recomendados</p>;
};

export default DetailsRecommended;
