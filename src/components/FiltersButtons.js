import React from "react";
import PropTypes from "prop-types";

function FiltersButtons({ handleClick }) {
  const handler = (setSelectedCategory, value) =>
  setSelectedCategory((state) => (value !== state ? value : 'all'));

  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={() => handleClick("all")}
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={() => handler(handleClick, 'comida')}
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={() => handler(handleClick, 'bebida')}
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
