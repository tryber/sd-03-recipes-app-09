import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect, useLocation } from 'react-router-dom';
import RecipesContext from '../contexts/RecipesContext';
import { fetchDrinkById } from '../services/ServiceDrinks';
import { fetchMealById } from '../services/ServiceMeals';

function RedirectFunc({ id }) {
  const { setMealsData, setDrinksData } = useContext(RecipesContext);
  const { pathname } = useLocation();

  if (pathname.includes('/bebidas')) {
    fetchDrinkById(id).then(({ drinks }) => setDrinksData(drinks));
    return <Redirect to={`/bebidas/${id}`} />;
  }
  fetchMealById(id).then(({ meals }) => setMealsData(meals));
  return <Redirect to={`/comidas/${id}`} />;
}

RedirectFunc.propTypes = {
  id: PropTypes.number.isRequired,
};

export default RedirectFunc;
