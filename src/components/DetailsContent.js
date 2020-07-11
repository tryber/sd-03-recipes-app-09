import React, { useContext } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useLocation } from 'react-router-dom';
import RecipesContext from '../contexts/RecipesContext';
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
      <p data-testid="recipe-title" className="details-name">{data.name}</p>
      {ShareButton()}
      {FavoriteButton(data)}
    </div>
    <div>
      <h4 data-testid="recipe-category">{data.category}</h4>
    </div>
  </div>
);

const renderIngredients = (ingredients) => (
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

const DetailsContent = () => {
  const { mealsData, drinksData } = useContext(RecipesContext);
  const { pathname } = useLocation();
  const data = pathname.includes('/comidas') ? mealsData : drinksData;

  return (
    <div>
      {renderDetailsHeader(data)}
      {renderIngredients(data.ingredients)}
      {renderInstructions(data.instructions)}
      {renderVideo(data.video)}
    </div>
  );
};

export default DetailsContent;
