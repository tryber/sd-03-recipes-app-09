import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProgressContent from '../components/ProgressContent';
import ProgressIngredients from '../components/ProgressIngredients';
import { fetchMealById } from '../services/ServiceMeals';
import { fetchDrinkById } from '../services/ServiceDrinks';
import { sortDrinkData, sortMealData } from '../data/helpers/sortData';
import './DetailsPage.css';

function ProgressPage(props) {
  const {
    match: {
      params: { id },
    },
  } = props;
  const { pathname } = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    if (pathname.includes('/bebidas')) {
      fetchDrinkById(id)
        .then(({ drinks }) => sortDrinkData(drinks[0]))
        .then((result) => setData(result));
    } else {
      fetchMealById(id)
        .then(({ meals }) => sortMealData(meals[0]))
        .then((result) => setData(result));
    }
  }, []);

  if (data) {
    return (
      <div>
        <ProgressContent data={data} />
        <ProgressIngredients ingredients={data.ingredients} />
      </div>
    );
  }
  return <p>Carregando página de progresso da receita...</p>;
}

ProgressPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default ProgressPage;
