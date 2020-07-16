import React from 'react';
import { Link } from 'react-router-dom';

const finishRecipeButton = () => {
  console.log('mounting button');
  return (
    <button type="button" data-testid="finish-recipe-btn">
      <Link to="/receitas-feitas">finalizar Receita</Link>
    </button>
  );
};

export default finishRecipeButton;
