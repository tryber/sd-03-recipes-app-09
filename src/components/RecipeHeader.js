import React from 'react';
import PropTypes from 'prop-types';
import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';

const RecipeHeader = ({ data }) => {
  const {
    name, image, category, id,
  } = data;
  return (
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
        <ShareButton id={id} />
        {id ? <FavoriteButton id={id} /> : null}
      </div>
      <div>
        <h4 data-testid="recipe-category">{category}</h4>
      </div>
    </div>
  );
};

RecipeHeader.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeHeader;
