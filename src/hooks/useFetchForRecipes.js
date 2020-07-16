import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMealById } from '../services/ServiceMeals';
import { fetchDrinkById } from '../services/ServiceDrinks';
import { sortDrinkData, sortMealData } from '../data/helpers/sortData';

const useFetchForRecipes = (id) => {
  const { pathname } = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    if (pathname.includes('/bebidas')) {
      fetchDrinkById(id)
        .then(({ drinks }) => sortDrinkData(drinks[0]))
        .then((result) => setData(result));
    } else {
      fetchMealById(id)
        .then(({ meals }) => sortMealData(meals[0]))
        .then((result) => setData(result));
    }
  }, []);
  return data;
};

export default useFetchForRecipes;
