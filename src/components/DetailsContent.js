import React from 'react';
import ReactPlayer from 'react-player/youtube';
import PropTypes from 'prop-types';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';

const renderDetailsHeader = (data) => (
  <div>
    <img
      data-testid="recipe-photo"
      className="details-img"
      alt={data.name}
      src={data.image}
    />
    <div id="title-wrapper">
      <p data-testid="recipe-title" className="details-name">
        {data.name}
      </p>
      <ShareButton testid="share-btn" />
      {data.id ? <FavoriteButton id={data.id} /> : null}
    </div>
    <div>
      <h4 data-testid="recipe-category">{data.category}</h4>
    </div>
  </div>
);

const renderIngredients = (ingredients) => {
  if (ingredients) {
    return (
      <div>
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, i) => (
            <li
              data-testid={`${i}-ingredient-name-and-measure`}
              key={ingredient}
            >
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <div />;
};

const renderInstructions = (instructions) => (
  <div>
    <h3>Instructions</h3>
    <p data-testid="instructions">{instructions}</p>
  </div>
);

const renderVideo = (video, name) => {
  console.log(video);
  if (video) {
    return (
      <div>
        <h3>Video</h3>
        <ReactPlayer
          data-testid="video"
          title={`${name} recipe`}
          width="360"
          height="250"
          url={video}
        />
      </div>
    );
  }
  return null;
};

const DetailsContent = ({ data }) => {
  if (data) {
    return (
      <div>
        {renderDetailsHeader(data)}
        {renderIngredients(data.ingredients)}
        {renderInstructions(data.instructions)}
        {renderVideo(data.video)}
      </div>
    );
  }
  return <div />;
};

DetailsContent.propTypes = {
  data: PropTypes.shape({
    alcoholicOrNot: PropTypes.string,
    area: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    instructions: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    video: PropTypes.string,
  }).isRequired,
};

export default DetailsContent;
