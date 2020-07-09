import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RecipesContext from '../contexts/RecipesContext';

function RecipeCard({
  imgSrc, name, id, index, path,
}) {
  const { setMealsData, setDrinksData } = useContext(RecipesContext);
  return (
    <div className="box" data-testid={`${index}-recipe-card`}>
      <Link onClick={() => { setDrinksData(null); setMealsData(null); }} className="card-link" to={`/${path}/${id}`}>
        <img
          data-testid={`${index}-card-img`}
          className="img"
          src={imgSrc}
          alt={name}
        />
        <br />
        <p data-testid={`${index}-card-name`}>{name}</p>
      </Link>
    </div>
  );
}

RecipeCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
};

export default RecipeCard;
