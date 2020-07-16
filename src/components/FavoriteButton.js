import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { fetchDrinkById } from '../services/ServiceDrinks';
import { fetchMealById } from '../services/ServiceMeals';
import { sortMealData, sortDrinkData } from '../data/helpers/sortData';

const isFavorite = (id) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return favorites ? favorites.some((recipe) => recipe.id === id) : false;
};

const createFavoriteObject = (data, pathname) => {
  const sortedData = pathname.includes('/comidas') ? sortMealData(data[0]) : sortDrinkData(data[0]);
  const favorite = {
    id: sortedData.id,
    type: sortedData.type,
    area: sortedData.area,
    category: sortedData.type === 'bebida' ? sortedData.drinkType : sortedData.category,
    alcoholicOrNot: sortedData.alcoholicOrNot,
    name: sortedData.name,
    image: sortedData.image,
  };
  return favorite;
};

const saveFavorite = async (id, pathname, setIsFavorite) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const data = pathname.includes('/comidas') ? await fetchMealById(id) : await fetchDrinkById(id);
  const favoriteObject = createFavoriteObject(pathname.includes('/comidas') ? data.meals : data.drinks, pathname);
  if (favorites) {
    favorites.push(favoriteObject);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    setIsFavorite(true);
  } else {
    localStorage.setItem('favoriteRecipes', JSON.stringify([favoriteObject]));
    setIsFavorite(true);
  }
};

const removeFavorite = (id, setIsFavorite, handler) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favorites) {
    const filteredFavorites = favorites.filter((recipe) => recipe.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(filteredFavorites));
    setIsFavorite(false);
  }
  if (handler) handler(true);
  return setIsFavorite(false);
};

const FavoriteButton = ({ id, handleFatherElement, testid }) => {
  const [favorite, setFavorite] = useState(isFavorite(id));
  const { pathname } = useLocation();
  return (
    <button
      type="button"
      onClick={favorite
        ? () => removeFavorite(id, setFavorite, handleFatherElement)
        : () => saveFavorite(id, pathname, setFavorite)}
    >
      {favorite
        ? (
          <img
            data-testid={testid || 'favorite-btn'}
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

FavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
  handleFatherElement: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
};

export default FavoriteButton;
