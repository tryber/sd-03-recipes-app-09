import React from 'react';

export default function FiltersButtons(handleClick) {
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
