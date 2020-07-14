import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { listAllAreas } from '../services/ServiceMeals';

export default function AreaOptions(props) {
  const [areas, setAreas] = useState([]);
  const { handleChange } = props;

  const getAllAreas = async () => {
    const { meals } = await listAllAreas();
    setAreas(meals);
  };

  useEffect(() => {
    getAllAreas();
  }, []);

  return (
    <select
      onChange={(e) => handleChange(e.target.value)}
      data-testid="explore-by-area-dropdown"
    >
      <option value="All" data-testid="All-option">
        All
      </option>
      {areas && areas.length > 1 ? (
        areas.map(({ strArea }) => (
          <option key={strArea} value={strArea} data-testid={`${strArea}-option`} >
            {strArea}
          </option>
        ))
      ) : (
        <option>Carregando...</option>
      )}
    </select>
  );
}

AreaOptions.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
