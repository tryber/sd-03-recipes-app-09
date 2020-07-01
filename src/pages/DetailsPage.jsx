import React from "react";
import { useContext } from 'react';
import RecipesContext from '../contexts/RecipesContext';
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const { mealsData, drinksData } = useContext(RecipesContext);
  const { pathname } = useLocation();
  console.log(mealsData);
  if (pathname.includes('bebidas')) {
    return (
      <div>
        <h1>Details Page</h1>
        <img className="img" src={drinksData[0].strDrinkThumb} alt={'bebida'} />
      </div>
    );
  }
  return (
    <div>
      <h1>Details Page</h1>
      <img className="img" src={mealsData[0].strMealThumb} alt={'comida'} />
    </div>
  );
};

export default DetailsPage;
