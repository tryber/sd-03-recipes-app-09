import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './ExplorePage.css';

function ExplorePage() {
  return (
    <div>
      <Header />
      <div className="buttons explore-buttons">
        <Link to="/explorar/comidas">
          <button type="button" data-testid="explore-food" className="button is-danger">Explorar Comidas</button>
        </Link>
        <Link to="/explorar/bebidas">
          <button type="button" data-testid="explore-drinks" className="button is-danger">Explorar Bebidas</button>
        </Link>
        <Footer />
      </div>
    </div>
  );
}

export default ExplorePage;
