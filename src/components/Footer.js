import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

export class Footer extends Component {
  render() {
    return (
      <div>
        <Link to="/explorar/comidas">
          <img src={mealIcon} alt="Ícone de perfil" />
        </Link>
        <Link to="/explorar">
          <img src={exploreIcon} alt="Ícone de perfil" />
        </Link>
        <Link to="/explorar/bebidas">
          <img src={drinkIcon} alt="Ícone de perfil" />
        </Link>
      </div>
    );
  }
}

export default Footer;
