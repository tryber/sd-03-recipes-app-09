import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesContext from '../contexts/RecipesContext';
import { fetchMeals, fetchDrinks } from './fetchSearch';
import SearchBarForm from './SearchBarForm';

function SearchBar() {
  const { setMealsData, setDrinksData } = useContext(RecipesContext);
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [inputText, setInputText] = useState('');
  const { pathname } = useLocation();

  const onClick = () => {
    if (pathname === '/comidas') {
      return fetchMeals(setMealsData, selectedRadio, inputText);
    }
    return fetchDrinks(setDrinksData, selectedRadio, inputText);
  };

  const onInputChange = (event) => {
    if (event.length > 1 && selectedRadio === 'Primeira letra') {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
    return setInputText(event);
  };

  const props = {
    inputText,
    onInputChange,
    setSelectedRadio,
    onClick,
  };

  return <div>{<SearchBarForm {...props} />}</div>;
}

export default SearchBar;
