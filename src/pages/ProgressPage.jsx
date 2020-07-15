import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipeHeader from '../components/RecipeHeader';
import RecipeInstructions from '../components/RecipeInstructions';
import ProgressIngredients from '../components/ProgressIngredients';
import FinishRecipeButton from '../components/FinishRecipeButton';
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
        <RecipeHeader name={data.name} image={data.image} category={data.category} id={data.id} />
        <ProgressIngredients ingredients={data.ingredients} />
        <RecipeInstructions instructions={data.instructions} />
        <FinishRecipeButton />
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
