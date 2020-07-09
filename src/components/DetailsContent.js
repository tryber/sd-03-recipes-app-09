import React, { useContext } from 'react';
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
    <div id="title-wrapper" className="details-name-wrapper">
      <p data-testid="recipe-title" className="title">{data.name}</p>
      <div>
      {ShareButton()}
      {FavoriteButton(data)}
      </div>
    </div>
    <div>
      <h4 className="details-title category" data-testid="recipe-category">{data.category}</h4>
    </div>
  </div>
);

const renderIngredients = (ingredients) => (
  <div>
    <h3 className="details-title ingredients-title">Ingredients</h3>
    <ul className="ingredient-list">
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
    <h3 className="details-title">Instructions</h3>
    <p className="instructions" data-testid="instructions">{instructions}</p>
  </div>
);

const renderVideo = (video, name) => {
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
