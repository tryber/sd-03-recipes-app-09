import React from 'react';
import PropTypes from 'prop-types';
import RecipeHeader from '../components/RecipeHeader';
import RecipeIngredientList from '../components/RecipeIngredientList';
import RecipeInstructions from '../components/RecipeInstructions';
import RecipeVideo from '../components/RecipeVideo';
import DetailsRecommended from '../components/DetailsRecommended';
import DetailsButton from '../components/DetailsButton';
import './DetailsPage.css';
import useFetchForRecipes from '../hooks/useFetchForRecipes';

function DetailsPage(props) {
  const {
    match: {
      params: { id },
    },
  } = props;

  const data = useFetchForRecipes(id);

  if (data.id !== undefined) {
    return (
      <div>
        <RecipeHeader data={data} />
        <RecipeIngredientList ingredients={data.ingredients} />
        <RecipeInstructions instructions={data.instructions} />
        <RecipeVideo video={data.video} />
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
