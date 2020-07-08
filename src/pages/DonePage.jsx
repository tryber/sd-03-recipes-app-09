import React from "react";
import shareIcon from "src/images/shareIcon.svg";

function DonePage() {
  const doneRecipes = JSON.parse(localStorage.getItem("doneRecipes"));
  if (doneRecipes) {
    return (
      <div>
        {doneRecipes.map((recipe, index) =>
          recipe.type === "comida" ? (
            <div data-testid={`${index}-horizontal-top-text`}>
              <img src={recipe.image} />
              <p
                data-testid={`${index}-horizontal-top-text`}
              >{`${recipe.area} - ${recipe.category}`}</p>
              <img
                src={shareIcon}
                data-testid={`${index}-horizontal-share-btn`}
              />
              <p data-testid={`${index}-horizontal-name`}>{recipe.name}</p>
              <p
                data-testid={`${index}-horizontal-done-date`}
              >{`Feito em: ${recipe.doneDate}`}</p>
              <p>
                {recipe.tags.map((tag) => (
                  <span data-testid={`${index}-${tag}-horizontal-tag`}>
                    {tag}
                  </span>
                ))}
              </p>
            </div>
          ) : (
            <div data-testid={`${index}-horizontal-top-text`}>
              <img src={recipe.image} />
              <p data-testid={`${index}-horizontal-top-text`}>
                {recipe.alcoholicOrNot}
              </p>
              <img
                src={shareIcon}
                data-testid={`${index}-horizontal-share-btn`}
              />
              <p data-testid={`${index}-horizontal-name`}>{recipe.name}</p>
              <p
                data-testid={`${index}-horizontal-done-date`}
              >{`Feito em: ${recipe.doneDate}`}</p>
            </div>
          )
        )}
      </div>
    );
  }
  return <p>Sem receitas feitas</p>;
}

export default DonePage;
