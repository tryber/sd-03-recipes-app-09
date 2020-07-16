import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareButton from '../components/ShareButton';

export const MealCard = ({
  index,
  image,
  area,
  category,
  name,
  doneDate,
  id,
  tags,
}) => (
  <div>
    <Link to={`/comidas/${id}`}>
      <img
        className="img"
        alt={name}
        src={image}
        data-testid={`${index}-horizontal-image`}
      />
      <h2 data-testid={`${index}-horizontal-name`}>{name}</h2>
    </Link>
    <p
      data-testid={`${index}-horizontal-top-text`}
    >{`${area} - ${category}`}</p>
    <ShareButton
      testid={`${index}-horizontal-share-btn`}
      path={`/comidas/${id}`}
    />
    <p
      data-testid={`${index}-horizontal-done-date`}
    >{`Feito em: ${doneDate}`}</p>
    <p>
      {tags &&
        tags.map((tag) => (
          <span key={tag} data-testid={`${index}-${tag}-horizontal-tag`}>
            {tag}
          </span>
        ))}
    </p>
  </div>
);

export const DrinkCard = ({
  index,
  image,
  alcoholicOrNot,
  name,
  doneDate,
  id,
}) => (
  <div>
    <Link to={`/bebidas/${id}`}>
      <img
        className="img"
        src={image}
        alt={name}
        data-testid={`${index}-horizontal-image`}
      />
      <h2 data-testid={`${index}-horizontal-name`}>{name}</h2>
    </Link>
    <p data-testid={`${index}-horizontal-top-text`}>{alcoholicOrNot}</p>
    <ShareButton
      testid={`${index}-horizontal-share-btn`}
      path={`/bebidas/${id}`}
    />
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
  doneDate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

DrinkCard.propTypes = {
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  doneDate: PropTypes.string.isRequired,
};
