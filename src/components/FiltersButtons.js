import React from 'react';
import PropTypes from 'prop-types';

export default function FiltersButtons(props) {
  const { handleClick } = props;

  return (
    <div>
      <button type="button" data-testid="filter-by-all-btn" onClick={() => handleClick('All')}>
        All
      </button>
      <button type="button" data-testid="filter-by-food-btn" onClick={() => handleClick('Food')}>
        Food
      </button>
      <button type="button" data-testid="filter-by-drink-btn" onClick={() => handleClick('Drinks')}>
        Drinks
      </button>
    </div>
  );
}

FiltersButtons.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
