import React from 'react';

function RecipeCard({ imgSrc, name, id, recipe }) {
  return (
    <div>
      <img className="img" src={imgSrc} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default RecipeCard;
