import React from 'react';
import PropTypes from 'prop-types';

export default function AreaOptions(props) {
  const { areas, handleChange } = props;
  return (
    <select onChange={(e) => handleChange(e.target.value)} data-testid="explore-by-area-dropdown">
      <option value="All" data-testid="All-option">All</option>
      {areas.map((area) => (
        <option key={area} value={area} data-testid={`${area}-option`}>
          {area}
        </option>
      ))}
    </select>
  );
}

AreaOptions.propTypes = {
  areas: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};
