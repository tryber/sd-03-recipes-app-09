import React from "react";
import PropTypes from "prop-types";
import RedirectFunc from "../data/RedirectFunc";

function RecipeCard({ imgSrc, name, id, index }) {
  return (
    <div>
      <img
        data-testid={`${index}-card-img`}
        className="img"
        src={imgSrc}
        alt={name}
      />
      <br />
      <button type="button" onClick={() => <RedirectFunc id={id} />}>
        {name}
      </button>
    </div>
  );
}

RecipeCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
