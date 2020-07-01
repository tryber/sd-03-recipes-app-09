import React from 'react';
import PropTypes from 'prop-types';
import RedirectFunc from '../data/RedirectFunc';

function RecipeCard({ imgSrc, name, id }) {
  const onClick = () => (
    <RedirectFunc id={id} />
  );

  return (
    <button type="button" onClick={onClick}>
      <img className="img" src={imgSrc} alt={name} />
      <p>{name}</p>
    </button>
  );
}

RecipeCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RecipeCard;
