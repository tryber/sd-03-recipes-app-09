import React from 'react';
import PropTypes from 'prop-types';

const ingredientCheck = (e) => {
  console.log(e.target.style);
  e.target.style.textDecoration = 'line-through';
};

const ProgressIngredients = ({ ingredients }) => {
  if (ingredients) {
    return (
      <div>
        <ul>
          {ingredients.map((ingredient, i) => (
            <li
              data-testid={`${i}-ingredient-step`}
            >
              <button type="button" onClick={(e) => ingredientCheck(e)}>{ingredient}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
};

ProgressIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProgressIngredients;
