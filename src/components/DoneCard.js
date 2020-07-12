import React from "react";
import PropTypes from 'prop-types';
import ShareButton from '../components/ShareButton';

export const MealCard = ({ index, image, area, category, name, doneDate, tags }) => (
  <div>
    <img
      className="img"
      alt={name}
      src={image}
      data-testid={`${index}-horizontal-image`}
    />
    <p
      data-testid={`${index}-horizontal-top-text`}
    >{`${area} - ${category}`}</p>
    <div data-testid={`${index}-horizontal-share-btn`}>
      <ShareButton />
    </div>
    <p data-testid={`${index}-horizontal-name`}>{name}</p>
    <p
      data-testid={`${index}-horizontal-done-date`}
    >{`Feito em: ${doneDate}`}</p>
    <p>
      {tags && tags.map((tag) => (
        <span key={tag} data-testid={`${index}-${tag}-horizontal-tag`}>{tag}</span>
      ))}
    </p>
  </div>
);

export const DrinkCard = ({ index, image, alcoholicOrNot, name, doneDate }) => (
  <div>
    <img
      className="img"
      src={image}
      alt={name}
      data-testid={`${index}-horizontal-image`}
    />
    <p data-testid={`${index}-horizontal-top-text`}>{alcoholicOrNot}</p>
    <div data-testid={`${index}-horizontal-share-btn`}>
      <ShareButton />
    </div>
    <p data-testid={`${index}-horizontal-name`}>{name}</p>
    <p
      data-testid={`${index}-horizontal-done-date`}
    >{`Feito em: ${doneDate}`}</p>
  </div>
);

MealCard.propTypes = {
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  doneData: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

DrinkCard.propTypes = {
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  doneData: PropTypes.string.isRequired,
};
