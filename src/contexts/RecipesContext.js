import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const RecipesContext = createContext();

const contextValue = {

};

const RecipesProvider = ({ children }) => (
  <RecipesContext.Provider value={contextValue}>
    {children}
  </RecipesContext.Provider>
);

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RecipesContext, RecipesProvider };
