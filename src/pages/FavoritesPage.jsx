import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import FiltersButtons from '../components/FiltersButtons';

import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';

import './FavoritesPage.css';

const createCards = (params, setUpdateUnfavorite) =>
  params.map(
    ({ id, type, area, category, alcoholicOrNot, name, image }, index) => {
      const path = type === 'comida' ? `/comidas/${id}` : `/bebidas/${id}`;
      return (
        <div key={id} className="main-favorite-cards">
          <div>
            <Link to={path}>
              <img
                src={image}
                alt={name}
                className="img"
                data-testid={`${index}-horizontal-image`}
              />
            </Link>
          </div>
          <div>
            {type === 'comida' ? (
              <p data-testid={`${index}-horizontal-top-text`}>
                {area} - {category}
              </p>
            ) : (
              <p data-testid={`${index}-horizontal-top-text`}>
                {alcoholicOrNot}
              </p>
            )}
            <Link to={path}>
              <p data-testid={`${index}-horizontal-name`}>{name}</p>
            </Link>
          </div>
          <div>
            <ShareButton testid={`${index}-horizontal-share-btn`} path={path} />
            <FavoriteButton
              id={id}
              handleFatherElement={setUpdateUnfavorite}
              testid={`${index}-horizontal-favorite-btn`}
            />
          </div>
        </div>
      );
    },
  );

const mountFavoriteList = (filter, favorites, setUpdateUnfavorite) => {
  let mountParams = [];
  if (favorites.length === 0) return <p>Sem receitas favoritas...</p>;
  else if (filter === 'comida') {
    mountParams = favorites.filter((favorite) => favorite.type === 'comida');
    return createCards(mountParams, setUpdateUnfavorite);
  } else if (filter === 'bebida') {
    mountParams = favorites.filter((favorite) => favorite.type === 'bebida');
    return createCards(mountParams, setUpdateUnfavorite);
  }
  mountParams = favorites;
  return createCards(mountParams, setUpdateUnfavorite);
};

function FavoritesPage() {
  const [updateUnfavorite, setUpdateUnfavorite] = useState(false);
  const [filterRecipes, setFilterRecipes] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const getFavoritesAndSet = () => {
    const favoriteList =
      JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setFavorites([...favoriteList]);
    setUpdateUnfavorite(false);
  };

  useEffect(() => {
    getFavoritesAndSet();
  }, [updateUnfavorite]);

  return (
    <div>
      <Header />
      <FiltersButtons handleClick={setFilterRecipes} />
      {favorites && favorites.length >= 1
        ? mountFavoriteList(filterRecipes, favorites, setUpdateUnfavorite)
        : null}
    </div>
  );
}

export default FavoritesPage;
