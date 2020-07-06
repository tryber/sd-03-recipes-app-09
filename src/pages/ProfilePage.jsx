import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { email } = user;
  return (
    <div>
      <Header />
      <h1>Profile Page</h1>
      <h2>{email}</h2>
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
};

export default ProfilePage;
