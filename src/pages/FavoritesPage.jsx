import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FiltersButtons from '../components/FiltersButtons';
import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';

export default function FavoritesPage() {
  const [filterRecipes, setFilterRecipes] = useState('All');
  const [favorites, setFavorites] = useState([]);

  const getFavoritesAndSet = () => {
    const favoriteList = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavorites([...favoriteList]);
  };

  const createCards = (params) => {
    return (
      params.map(({ id, type, area, category, alcoholicOrNot, name, image }) => (
        <div>
          <div>
            <img src={image} alt={name} />
          </div>
          <div>
            {(type === 'comida') ? <p>{area}-{category}</p> : <p>{alcoholicOrNot}</p>}
            <p>{name}</p>
          </div>
          {/* <div>
            <ShareButton />
            <FavoriteButton data={id} />
          </div> */}
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
  }, []);

  return (
    <div>
      <Header />
      <FiltersButtons handleClick={setFilterRecipes} />
      {favorites && favorites.length > 1 ? mountFavoriteList(filterRecipes) : null}
      <Footer />
    </div>
  );
}

// data é o id da receita
