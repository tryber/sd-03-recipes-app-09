import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesContext from '../contexts/RecipesContext';
import MainPageContent from '../components/MainPageContent';
import { fetchMeals } from '../services/ServiceMeals';
import { fetchDrinks } from '../services/ServiceDrinks';

const MealsPage = () => {
  const { setMealsData, setDrinksData, toggleSearchBar } = useContext(RecipesContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/bebidas') {
      fetchDrinks().then(({ drinks }) => setDrinksData(drinks));
    }
    fetchMeals().then(({ meals }) => setMealsData(meals));
  }, [pathname, toggleSearchBar]);

  return <MainPageContent />
};

export default MealsPage;
