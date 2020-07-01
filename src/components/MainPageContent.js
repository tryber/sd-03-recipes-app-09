import React from 'react';
import RecipesContext from '../contexts/RecipesContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GetRecipesCards from '../components/GetRecipesCards';
import RedirectFunc from '../data/RedirectFunc';

function MainPageContent() {
  const { mealsData, drinksData } = useContext(RecipesContext);
  const { pathname } = useLocation();
  const mealsCondition = pathname === '/comidas' && mealsData;
  const drinksCondition = pathname === '/bebidas' && drinksData;

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

export default MainPageContent;
