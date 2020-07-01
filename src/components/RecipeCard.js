import React from 'react';
import PropTypes from 'prop-types';
import RedirectFunc from '../data/RedirectFunc';

function RecipeCard({ imgSrc, name, id, index }) {
  const onClick = () => (
    <RedirectFunc id={id} />
  );

  return (
    <button type="button" onClick={onClick}>
      <img data-testid={`${index}-card-img`} className="img" src={imgSrc} alt={name} />
      <p>{name}</p>
    </button>
  );
}
x
RecipeCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
