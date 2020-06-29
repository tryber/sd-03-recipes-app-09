import React from 'react';

function SearchBarForm({ inputText, onInputChange, setSelectedRadio, onClick }) {
  return (
    <form>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(event) => onInputChange(event.target.value)}
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

export default SearchBarForm;
