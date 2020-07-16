import React from 'react';
import PropTypes from 'prop-types';
import RecipeHeader from '../components/RecipeHeader';
import RecipeInstructions from '../components/RecipeInstructions';
import ProgressIngredients from '../components/ProgressIngredients';
import FinishRecipeButton from '../components/FinishRecipeButton';
import './DetailsPage.css';
import useFetchForRecipes from '../hooks/useFetchForRecipes';

function ProgressPage(props) {
  const {
    match: {
      params: { id },
    },
  } = props;

  const data = useFetchForRecipes(id);

  if (data) {
    return (
      <div>
        <RecipeHeader data={data} />
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
