import React from 'react';
import PropTypes from 'prop-types';

const RecipeVideo = ({ video, name }) => {
  if (video) {
    return (
      <div>
        <h3>Video</h3>
        <iframe
          data-testid="video"
          title={`${name} recipe`}
          width="360"
          src={video}
        />
      </div>
    );
  }
  return null;
};

RecipeVideo.propTypes = {
  video: PropTypes.isRequired,
  name: PropTypes.string.isRequired,
};

export default RecipeVideo;
