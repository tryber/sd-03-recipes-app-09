import React from 'react';
import PropTypes from 'prop-types';

function FiltersButtons({ handleClick }) {
  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={() => handleClick('all')}
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={() => handleClick('comida')}
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={() => handleClick('bebida')}
      >
        Drinks
      </button>
    </div>
  );
}

FiltersButtons.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default FiltersButtons;
