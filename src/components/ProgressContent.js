import React from 'react';
import PropTypes from 'prop-types';

const ProgressContent = ({ data }) => {
  const { name, image, category } = data;

  return (
    <div className="progress-content-wrapper">
      <div className="progress-image-wrapper">
        <img data-testid="recipe-photo" alt={name} src={image} />
      </div>
      <div>
        <p data-testid="recipe-title">{name}</p>
        <p data-testid="recipe-category">{category}</p>
      </div>
    </div>
  );
};

ProgressContent.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ProgressContent;
