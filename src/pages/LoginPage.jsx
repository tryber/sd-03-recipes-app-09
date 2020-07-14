import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../contexts/RecipesContext';
import './LoginPage.css';

const setLocalStorage = (email) => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  localStorage.setItem('user', JSON.stringify({ email }));
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setDrinksData, setMealsData } = useContext(RecipesContext);
  const validEmail = () => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return !!email && typeof email === 'string' && !!email.match(emailRegex);
  };
  useEffect(() => {
    console.log('login');
    setDrinksData([]);
    setMealsData([]);
  }, []);
  return (
    <form>
      <h1 className="login-header">Recipes App</h1>
      <input
        className="input is-danger"
        placeholder="Email"
        type="email"
        data-testid="email-input"
        required
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        className="input is-danger"
        placeholder="Password"
        type="password"
        data-testid="password-input"
        required
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/comidas">
        <button
          className="login-button button is-danger is-medium is-rounded"
          type="submit"
          data-testid="login-submit-btn"
          disabled={!validEmail(email) || password.length <= 6}
          onClick={() => setLocalStorage(email)}
        >
          Login
        </button>
      </Link>
    </form>
  );
};
export default LoginPage;
