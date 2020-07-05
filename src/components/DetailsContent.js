import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesContext from '../contexts/RecipesContext';
import { sortMealData, sortDrinkData } from '../data/helpers/sortData';

const renderRecipeContent = (data) => {
  console.log(data);
  return (
    <div>
      <img alt={data.name} src={data.image} />
      <h2>{data.name}</h2>
      <h4>{data.category}</h4>
      <div>
        <h3>Ingredients</h3>
        <ul>
          {data.ingredients.map((ingredient) => <li>{ingredient}</li>)}
        </ul>
      </div>
      <div>
        <h3>Instructions</h3>
        <p>{data.instructions}</p>
      </div>
      {data.video ? (
        <div>
          <h3>Video</h3>
          <iframe
            title={`${data.name} recipe`}
            width="340"
            height="160"
            src={data.video}
          />
        </div>
      ) : null}
    </div>
  );
};

const DetailsContent = () => {
  const { mealsData, drinksData } = useContext(RecipesContext);
  const { pathname } = useLocation();
  const data = pathname.includes('comidas') ? mealsData[0] : drinksData[0];

  return (
    !data ? <div>carregando</div>
      : (
        <div>
          {renderRecipeContent(pathname.includes('comidas')
            ? sortMealData(data)
            : sortDrinkData(data))}
        </div>
      )
  );
};

export default DetailsContent;
