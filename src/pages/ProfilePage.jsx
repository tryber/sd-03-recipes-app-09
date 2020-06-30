import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const user = localStorage.getItem('user');

const ProfilePage = () => (
  <div>
    <h1>ProfilePage</h1>
    <h2>{user}</h2>
    <Link to="/receitas-favoritas">
      <button data-testid="profile-done-btn">Receitas Favoritas</button>
    </Link>
    <Link to="/receitas-feitas">
      <button data-testid="profile-favorite-btn">Receitas Feitas</button>
    </Link>
    <Link to="/">
      <button
        onClick={() => localStorage.clear()}
        data-testid="profile-logout-btn"
      >
        Sair
      </button>
    </Link>
    <Footer />
  </div>
);

export default ProfilePage;
