import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FiltersButtons from '../components/FiltersButtons';

import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';

import './FavoritesPage.css';

const mountFavoriteList = (filter, favorites, setUpdateUnfavorite) => {
  let mountParams = [];
  if (filter === 'comida') {
    mountParams = favorites.filter((favorite) => favorite.type === 'comida');
    return createCards(mountParams, setUpdateUnfavorite);
  }

  if (filter === 'bebida') {
    mountParams = favorites.filter((favorite) => favorite.type === 'bebida');
    return createCards(mountParams, setUpdateUnfavorite);
  }

  mountParams = favorites;
  return createCards(mountParams, setUpdateUnfavorite);
};

const createCards = (params, setUpdateUnfavorite) =>
  params.map(({ id, type, area, category, alcoholicOrNot, name, image }, index) => {
    const path = type === 'comida' ? `/comidas/${id}` : `/bebidas/${id}`;
    return (
      <div key={id} className="main-favorite-cards">
        <div>
          <Link to={path}>
            <img src={image} alt={name} className="img" />
          </Link>
        </div>
        <div>
          {type === 'comida' ? (
            <p>
              {area}-{category}
            </p>
          ) : (
            <p>{alcoholicOrNot}</p>
          )}
          <Link to={path}>
            <p>{name}</p>
          </Link>
        </div>
        <div>
          <ShareButton />
          <FavoriteButton id={id} handleFatherElement={setUpdateUnfavorite} testid={`${index}-horizontal-favorite-btn`} />
        </div>
      </div>
    );
  });

function FavoritesPage() {
  const [updateUnfavorite, setUpdateUnfavorite] = useState(false);
  const [filterRecipes, setFilterRecipes] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const getFavoritesAndSet = () => {
    const favoriteList = JSON.parse(localStorage.getItem('favoriteRecipes'));
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
      <Footer />
    </div>
  );
}

export default FavoritesPage;
