import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const recommendationStyle = (index) => {
  const style = {
    width: '180px',
    display: index > 1 ? 'none' : 'block',
  };
  return style;
};

const RecommendationCard = (props) => {
  const { pathname } = useLocation();
  const path = pathname.includes('/comidas') ? '/bebidas' : '/comidas';
  const {
    index, image, name, category, id,
  } = props;
  return (
    <div
      key={id}
      data-testid={`${index}-recomendation-card`}
      style={recommendationStyle(index)}
    >
      <img src={image} alt={name} />
      <p>{category}</p>
      <Link to={`${path}/${id}`}>
        <h4 data-testid={`${index}-recomendation-title`}>{name}</h4>
      </Link>
    </div>
  );
};

RecommendationCard.propTypes = {
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RecommendationCard;
