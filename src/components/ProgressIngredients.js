import React from 'react';
import PropTypes from 'prop-types';

const ingredientCheck = (ingredient) => {
  const element = document.getElementById(ingredient);
  element.style.textDecoration = 'line-through';
};

const ProgressIngredients = ({ ingredients }) => {
  if (ingredients) {
    return (
      <div>
        {ingredients.map((ingredient, i) => (
          <div key={ingredient} data-testid={`${i}-ingredient-step`}>
            <input
              type="checkbox"
              value={ingredient}
              id={ingredient}
              onClick={() => ingredientCheck(`${ingredient}${i}`)}
            />
            <label id={`${ingredient}${i}`} htmlFor={ingredient}>{ingredient}</label>
          </div>
        ))}

      </div>
    );
  }
  return null;
};

ProgressIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProgressIngredients;
