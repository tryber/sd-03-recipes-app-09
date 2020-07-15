import React from 'react';

const finishRecipeButton = () => {
  console.log('mounting button');
  return (
    <button type="button" data-testid="finish-recipe-btn">
      finalizar Receita
    </button>
  );
};

export default finishRecipeButton;
