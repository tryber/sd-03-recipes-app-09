import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header() {
  const CheckLocation = () => {
    const { pathname } = useLocation();
    const [toggleSearchBar, setToggleSearchBar] = useState(false);

    const formatPathName = (pathname) => {
      const patterns = [
        { path: '/comidas', title: 'Comidas' },
        { path: '/bebidas', title: 'Bebidas' },
        { path: '/explorar', title: 'Explorar' },
        { path: '/explorar/comidas', title: 'Explorar Comidas' },
        { path: '/explorar/bebidas', title: 'Explorar Bebidas' },
        { path: '/explorar/comidas/ingredientes', title: 'Explorar Ingredientes' },
        { path: '/explorar/bebidas/ingredientes', title: 'Explorar Ingredientes' },
        { path: '/explorar/comidas/area', title: 'Explorar Origem' },
        { path: '/perfil', title: 'Perfil' },
        { path: '/receitas-feitas', title: 'Receitas Feitas' },
        { path: '/receitas-favoritas', title: 'Receitas Favoritas' },
      ];

      return patterns.find((patternEntry) => patternEntry.path === pathname);
    };

    const { title } = formatPathName(pathname);

    const forbiddenPlacesForSearchBar = [
      '/perfil',
      '/receitas-favoritas',
      '/receitas-feitas',
      '/explorar',
      '/explorar/comidas/ingredientes',
      '/explorar/bebidas/ingredientes',
      '/explorar/comidas',
      '/explorar/bebidas',
    ];

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
