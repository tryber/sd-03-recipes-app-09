import React, { useContext } from 'react';
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
        <div className="container is-fluid header">
          <Link to="/perfil">
            <img data-testid="profile-top-btn" src={profileIcon} alt="Ícone de perfil" className="header-img" />
          </Link>
          <p className="header-title" data-testid="page-title">{title}</p>
          <p />
        </div>
      );
    }

    return (
      <div className="container is-fluid header">
        <Link to="/perfil">
          <img data-testid="profile-top-btn" src={profileIcon} alt="Ícone de perfil" className="header-img" />
        </Link>
        <p data-testid="page-title" className="is-capitalized title">{title}</p>
        <button
          type="button"
          onClick={() => setToggleSearchBar(!toggleSearchBar)}
        >
          <img data-testid="search-top-btn" src={searchIcon} alt="Ícone de busca" className="header-img" />
        </button>
        { toggleSearchBar && <SearchBar /> }
      </div>
    );
  };

  return <div>{CheckLocation()}</div>;
}

export default Header;
