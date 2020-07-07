import React from 'react';

import RecipeCard from '../components/RecipeCard';

const FilterByRegion = (recipes, selectedRegion) => {
  let theRealDeal = recipes;
  if (selectedRegion !== 'All') {
    theRealDeal = recipes.filter(({ strArea }) => strArea === selectedRegion);
  }

  return theRealDeal.map((recipe, index) => (
    <RecipeCard
      key={recipe.idMeal}
      imgSrc={recipe.strMealThumb}
      name={recipe.strMeal}
      id={recipe.idMeal}
      index={index}
      path="comidas"
    />
  ));
};

export default FilterByRegion;
