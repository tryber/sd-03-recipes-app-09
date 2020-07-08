import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import DetailsContent from '../components/DetailsContent';
import DetailsRecommended from '../components/DetailsRecommended';
import DetailsButton from '../components/DetailsButton';
import { fetchMealById } from '../services/ServiceMeal';
import { fetchDrinkById } from '../services/ServiceDrinks';
import RecipesContext from '../contexts/RecipesContext';
import { sortDrinkData, sortMealData } from '../data/helpers/sortData';
import './DetailsPage.css';

const DetailsPage = (props) => {
  const { match: { params: { id } } } = props;
  const { pathname } = useLocation();
  const {
    drinksData, setDrinksData, mealsData, setMealsData,
  } = useContext(RecipesContext);
  const data = pathname.includes('/comidas') ? mealsData : drinksData;
  useEffect(() => {
    if (pathname.includes('/bebidas')) {
      fetchDrinkById(id)
        .then((response) => sortDrinkData(response.drinks[0]))
        .then((result) => setDrinksData(result));
    }
    if (pathname.includes('/comidas')) {
      fetchMealById(id)
        .then((response) => sortMealData(response.meals[0]))
        .then((result) => setMealsData(() => result));
    }
    return () => {
      setDrinksData(null);
      setMealsData(null);
    };
  }, []);

  return (
    !data ? <p>Carregando detalhes da receita...</p>
      : (
        <div>
          <DetailsContent />
          <DetailsRecommended />
          <DetailsButton />
        </div>
      )
  );
};

DetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default DetailsPage;
