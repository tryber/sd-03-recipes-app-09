import React from 'react';
import PropTypes from 'prop-types';
import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';

const RecipeHeader = ({
  name, image, category, id,
}) => (
  <div>
    <img
      data-testid="recipe-photo"
      className="details-img"
      alt={name}
      src={image}
    />
    <div id="title-wrapper">
      <p data-testid="recipe-title" className="details-name">
        {name}
      </p>
      <ShareButton />
      { id ? <FavoriteButton id={id} /> : null}
    </div>
    <div>
      <h4 data-testid="recipe-category">{category}</h4>
    </div>
  </div>
);

RecipeHeader.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RecipeHeader;
