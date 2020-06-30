import React, { useContext } from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';
import RecipesContext from '../contexts/RecipesContext';

import { fetchRandomDrink } from '../services/ServiceDrinks';
import { fetchRandomMeal } from '../services/ServiceMeal';

import Header from '../components/Header';
import Footer from '../components/Footer';


function ExplorePageBy() {
  const { pathname } = useLocation();
  // const { setMealsData, mealsData, setDrinksData } = useContext(RecipesContext);
  const history = useHistory();

  const verifyRouteByIngredients = () => {
    if (pathname === '/explorar/comidas') return '/explorar/comidas/ingredientes';
    return '/explorar/bebidas/ingredientes';
  }

  const surpriseFunction = () => {
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

  return (
    <div>
      <Header />
      <div>
        <Link to={verifyRouteByIngredients()}>
          <button data-testid="explore-by-ingredient">Por Ingredientes</button>
        </Link>
        {(pathname === '/explorar/comidas') &&
          <Link to="/explorar/comidas/area">
            <button data-testid="explore-by-area">Por Local de Origem</button>
          </Link>}
        <button data-testid="explore-surprise" onClick={surpriseFunction}>Me Surpreenda!</button>
      </div>
      <Footer />
    </div>
  )
}

export default ExplorePageBy;