import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const email = user ? user.email : "teste@teste.com";
  return (
    <div>
      <Header />
      <h1 className="title">Profile Page</h1>
      <h2 data-testid="profile-email" className="subtitle">
        {email}
      </h2>
      <div className="buttons profile-buttons">
        <Link to="/receitas-favoritas">
          <button
            data-testid="profile-favorite-btn"
            className="button is-info"
            type="button"
          >
            Receitas Favoritas
          </button>
        </Link>
        <Link to="/receitas-feitas">
          <button
            data-testid="profile-done-btn"
            className="button is-info"
            type="button"
          >
            Receitas Feitas
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            className="button is-danger"
            onClick={() => localStorage.clear()}
            data-testid="profile-logout-btn"
          >
            Sair
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
