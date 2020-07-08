import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

export class Footer extends Component {
  render() {
    return (
      <footer className="footer" data-testid="footer">
        <Link to="/bebidas">
          <img
            src={drinkIcon}
            alt="Ícone de perfil"
            data-testid="drinks-bottom-btn"
          />
        </Link>
        <Link to="/explorar">
          <img
            src={exploreIcon}
            alt="Ícone de perfil"
            data-testid="explore-bottom-btn"
          />
        </Link>
        <Link to="/comidas">
          <img
            src={mealIcon}
            alt="Ícone de perfil"
            data-testid="food-bottom-btn"
          />
        </Link>
      </footer>
    );
  }
}

export default Footer;
