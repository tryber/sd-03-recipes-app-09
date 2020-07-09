import React, { useState } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const isFavorite = (id) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return favorites ? favorites.some((recipe) => recipe.id === id) : false;
};

const createFavoriteObject = (data) => {
  const favorite = {
    id: data.id,
    type: data.type,
    area: data.area,
    category: data.type === 'bebida' ? data.drinkType : data.category,
    alcoholicOrNot: data.alcoholicOrNot,
    name: data.name,
    image: data.image,
  };
  return favorite;
};

const saveFavorite = (data, setIsFavorite) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const favoriteObject = createFavoriteObject(data);
  if (favorites) {
    favorites.push(favoriteObject);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    setIsFavorite(true);
  }
  if (!favorites) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([favoriteObject]));
    setIsFavorite(true);
  }
};

const removeFavorite = (id, setIsFavorite) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favorites) {
    const filteredFavorites = favorites.filter((recipe) => recipe.id !== id);
    console.log('favoritos depois de filtrar:', filteredFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(filteredFavorites));
    setIsFavorite(false);
  }
  return setIsFavorite(false);
};

const FavoriteButton = (props) => {
  const data = props;
  const [favorite, setFavorite] = useState(isFavorite(data.id));
  return (
    <button
      type="button"
      onClick={favorite
        ? () => removeFavorite(data.id, setFavorite)
        : () => saveFavorite(data, setFavorite)}
    >
      {favorite
        ? (
          <img
            data-testid="favorite-btn"
            src={blackHeartIcon}
            alt="filled-heart-icon"
            style={{ width: '26px' }}
          />
        )
        : (
          <img
            data-testid="favorite-btn"
            src={whiteHeartIcon}
            alt="empty-heart-icon"
            style={{ width: '26px' }}
          />
        )}
    </button>
  );
};

export default FavoriteButton;
