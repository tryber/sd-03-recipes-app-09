import React, { useContext, useState } from 'react';
import RecipesContext from '../contexts/RecipesContext';
import { fetchMeals, fetchDrinks } from './fetchSearch';

function SearchBar({ path }) {
  const { setMealsData, setDrinkData } = useContext(RecipesContext);
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [inputText, setInputText] = useState('');

  const onClick = () => {
    if (path === '/comidas') return fetchMeals(setMealsData, selectedRadio, inputText);
    return fetchDrinks(setDrinkData, selectedRadio, inputText);
  };

  return (
    <form>
      <div>
        <input
          type="text"
          onChange={(event) => setInputText(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ingredients">
          <input
            type="radio"
            id="ingredients"
            name="search"
            value="Ingredientes"
            onClick={(event) => setSelectedRadio(event.target.value)}
          />
          Ingredientes
        </label>
        <label htmlFor="name">
          <input
            type="radio"
            id="name"
            name="search"
            value="Nome"
            onClick={(event) => setSelectedRadio(event.target.value)}
          />
          Nome
        </label>
        <label htmlFor="first-letter">
          <input
            type="radio"
            id="first-letter"
            name="search"
            value="Primeira letra"
            onClick={(event) => setSelectedRadio(event.target.value)}
          />
          Primeira letra
        </label>
      </div>
      <div>
        <button type="button" onClick={onClick}>
          Buscar
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
