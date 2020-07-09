import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './RecipeCard.css';

function RecipeCard({ imgSrc, name, id, index, path }) {
  return (
    <Link to={`/${path}/${id}`} className="recipe-card">
      <div data-testid={`${index}-recipe-card`} className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              data-testid={`${index}-card-img`}
              className="img"
              src={imgSrc}
              alt={name}
            />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4" data-testid={`${index}-card-name`}>{name}</p>
        </div>
      </div>
    </Link>
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
