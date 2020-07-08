import React, { useContext } from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';

import RecipesContext from '../contexts/RecipesContext';
import { fetchRandomDrink } from '../services/ServiceDrinks';
import { fetchRandomMeal } from '../services/ServiceMeals';

import Header from '../components/Header';
import Footer from '../components/Footer';


function ExplorePageByForD() {
  const { pathname } = useLocation();
  const history = useHistory();
  const { setMealsData, setDrinksData } = useContext(RecipesContext);

  const verifyRouteByIngredients = () => {
    if (pathname === '/explorar/comidas') return '/explorar/comidas/ingredientes';
    return '/explorar/bebidas/ingredientes';
  };

  const surpriseFunction = () => {
    if (pathname === '/explorar/comidas') {
      const randomMeal = fetchRandomMeal();
      return (randomMeal
        .then((meal) => {
          const data = meal.meals[0];
          setMealsData([data]);
          history.push(`/comidas/${data.idMeal}`);
        }));
    }

    const randomDrink = fetchRandomDrink();
    return (randomDrink
      .then((drink) => {
        const data = drink.drinks[0];
        setDrinksData([data]);
        history.push(`/bebidas/${data.idDrink}`);
      }));
  };

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
  );
}

export default ExplorePageByForD;
