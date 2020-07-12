import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FiltersButtons from '../components/FiltersButtons';

import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';

import './FavoritesPage.css';

export default function FavoritesPage() {
  const [updateUnfavorite, setUpdateUnfavorite] = useState(false);
  const [filterRecipes, setFilterRecipes] = useState('All');
  const [favorites, setFavorites] = useState([]);

  const getFavoritesAndSet = () => {
    const favoriteList = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavorites([...favoriteList]);
    setUpdateUnfavorite(false);
  };

  const createCards = (params) => {
    return (
      params.map(({ id, type, area, category, alcoholicOrNot, name, image }) => (
        <div key={id} className="main-favorite-cards">
          <div>
            <Link to={(type === 'comida') ? `/comidas/${id}` : `/bebidas/${id}`}>
              <img src={image} alt={name} className="img" />
            </Link>
          </div>
          <div>
            {(type === 'comida') ? <p>{area}-{category}</p> : <p>{alcoholicOrNot}</p>}
            <Link to={(type === 'comida') ? `/comidas/${id}` : `/bebidas/${id}`}>
              <p>{name}</p>
            </Link>
          </div>
          <div>
            <ShareButton />
            <FavoriteButton id={id} handleFatherElement={setUpdateUnfavorite} />
          </div>
        </div>
      ))
    );
  };

  const mountFavoriteList = (filter) => {
    let mountParams = [];
    if (filter === 'Food') {
      mountParams = favorites.filter((favorite) => favorite.type === 'comida');
      return createCards(mountParams);
    }

    if (filter === 'Drinks') {
      mountParams = favorites.filter((favorite) => favorite.type === 'bebida');
      return createCards(mountParams);
    }

    mountParams = favorites;
    return createCards(mountParams);
  };

  useEffect(() => {
    getFavoritesAndSet();
  }, [updateUnfavorite]);

  return (
    <div>
      <Header />
      <FiltersButtons handleClick={setFilterRecipes} />
      {favorites && favorites.length >= 1 ? mountFavoriteList(filterRecipes) : null}
      <Footer />
    </div>
  );
}
