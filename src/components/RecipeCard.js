import React from 'react';
import PropTypes from 'prop-types';
import RedirectFunc from '../data/RedirectFunc';

function RecipeCard({ imgSrc, name, id }) {
  const onClick = () => (
    <RedirectFunc id={id} />
  )

  return (
    <div onClick={onClick}>
      <img className="img" src={imgSrc} alt={name} />
      <p>{name}</p>
    </div>
  );
}

RecipeCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default RecipeCard;
