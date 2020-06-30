import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import RecipesContext from '../contexts/RecipesContext';

function RedirectFunc() {
  const { mealsData, drinksData } = useContext(RecipesContext);
  if (mealsData && mealsData.length === 1) {
    return (
      <Redirect
        to={{
          pathname: `/comidas/${mealsData[0].idMeal}`,
          state: { data: mealsData },
        }}
      />
    );
  } else if (drinksData && drinksData.length === 1) {
    console.log('drink');
    return (
      <Redirect
        to={{
          pathname: `/bebidas/${drinksData[0].idDrink}`,
          state: { data: drinksData },
        }}
      />
    );
  }
}

export default RedirectFunc;
