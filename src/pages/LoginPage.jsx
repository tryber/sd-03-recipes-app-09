import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const setLocalStorage = (email) => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  localStorage.setItem('user', JSON.stringify({ email }));
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return !!email && typeof email === 'string' && !!email.match(emailRegex);
  };

  return (
    <form>
      <h1>LoginPage</h1>
      <input
        placeholder="Email"
        type="email"
        required
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        placeholder="Password"
        type="password"
        required
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/comidas">
        <button
          type="submit"
          disabled={!validEmail(email) || password.length < 6}
          onClick={() => setLocalStorage(email)}
        >
          Login
        </button>
      </Link>
    </form>
  );
};
export default LoginPage;
