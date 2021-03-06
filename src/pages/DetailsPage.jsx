import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import DetailsContent from '../components/DetailsContent';
import DetailsRecommended from '../components/DetailsRecommended';
import DetailsButton from '../components/DetailsButton';
import { fetchMealById } from '../services/ServiceMeals';
import { fetchDrinkById } from '../services/ServiceDrinks';
import { sortDrinkData, sortMealData } from '../data/helpers/sortData';
import './DetailsPage.css';

function DetailsPage(props) {
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
        <DetailsContent data={data} />
        <DetailsRecommended />
        <DetailsButton id={data.id} />
      </div>
    );
  }
  return <p>Carregando detalhes da receita...</p>;
}

DetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default DetailsPage;
