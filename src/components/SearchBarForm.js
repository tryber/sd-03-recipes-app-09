import React from 'react';
import PropTypes from 'prop-types';

function SearchBarForm({ inputText, onInputChange, setSelectedRadio, onClick }) {
  return (
    <form>
      <div>
        <input
          data-testid="search-input"
          type="text"
          value={inputText}
          onChange={(event) => onInputChange(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ingredients">
          <input
            data-testid="ingredient-search-radio"
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
            data-testid="name-search-radio"
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
            data-testid="first-letter-search-radio"
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
        <button data-testid="exec-search-btn" type="button" onClick={onClick}>
          Buscar
        </button>
      </div>
    </form>
  );
}

SearchBarForm.propTypes = {
  inputText: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  setSelectedRadio: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchBarForm;
