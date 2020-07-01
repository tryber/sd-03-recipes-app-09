import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../contexts/RecipesContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GetRecipesCards from '../components/GetRecipesCards';
import RedirectFunc from '../data/RedirectFunc';

function MainPageContent(mealsCondition, drinksCondition) {
  const { mealsData, drinksData } = useContext(RecipesContext);

  if (
    (mealsCondition && mealsData.length === 1) ||
    (drinksCondition && drinksData.length === 1)
  ) {
    return RedirectFunc();
  } else if (mealsData === null || drinksData === null) {
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros');
  }
  return (
    <div>
      <Header />
      <GetRecipesCards />
      <Footer />
    </div>
  );
}

MainPageContent.propTypes = {
  mealsCondition: PropTypes.bool.isRequired,
  drinksCondition: PropTypes.bool.isRequired,
};

export default MainPageContent;
