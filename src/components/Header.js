import React, { useState, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';

import RecipesContext from '../contexts/RecipesContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import { patterns, forbiddenPlacesForSearchBar } from '../data/Data';

import SearchBar from './SearchBar';

function Header() {
  const CheckLocation = () => {
    const { pathname } = useLocation();
    const { toggleSearchBar, setToggleSearchBar } = useContext(RecipesContext);

    const formatPathName = (path) => (
      patterns.find((patternEntry) => patternEntry.path === path)
    );

    const { title } = formatPathName(pathname);

    const checkForbidden = forbiddenPlacesForSearchBar.some(
      (place) => place === pathname,
    );

    if (checkForbidden) {
      return (
        <div className="header">
          <Link to="/perfil" data-testid="profile-top-btn">
            <img src={profileIcon} alt="Ícone de perfil" />
          </Link>
          <p className="header-title" data-testid="page-title">{title}</p>
          <p />
        </div>
      );
    }

    return (
      <div className="header">
        <Link to="/perfil">
          <img src={profileIcon} alt="Ícone de perfil" />
        </Link>
        <p className="header-title">{title}</p>
        <button
          type="button"
          data-testid="search-top-btn"
          onClick={() => setToggleSearchBar(!toggleSearchBar)}
        >
          <img src={searchIcon} alt="Ícone de busca" />
        </button>
        { toggleSearchBar && <SearchBar /> }
      </div>
    );
  };

  return <div>{CheckLocation()}</div>;
}

export default Header;
