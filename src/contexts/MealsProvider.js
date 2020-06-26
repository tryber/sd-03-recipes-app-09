import React from 'react';
import PropTypes from 'prop-types';
import MealsContext from './MealsContext';

function MealsProvider({ children }) {
  const contextValue = {

  };
  return (
    <MealsContext.Provider value={contextValue}>
      {children}
    </MealsContext.Provider>
  );
}

MealsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MealsProvider;
