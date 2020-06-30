import React from 'react';
import { useHistory } from 'react-router-dom';

import { fetchRandomDrink } from '../services/ServiceDrinks';
import { fetchRandomMeal } from '../services/ServiceMeal';

export default function SurpriseFunction(pathname) {
  const history = useHistory();

  if (pathname === '/explorar/comidas') {
    const randomMeal = fetchRandomMeal();
    randomMeal
      .then((meal) => {
        const data = meal.meals[0];
        // setMealsData([data]);
        history.push(`/comidas/${data.idMeal}`)
      })
  } else {
    const randomDrink = fetchRandomDrink();
    randomDrink
      .then((drink) => {
        const data = drink.drinks[0];
        // setDrinksData([data])
        history.push(`/comidas/${data.idDrink}`)
      })
  }
}
