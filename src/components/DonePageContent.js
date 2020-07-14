import React from 'react';
import PropTypes from 'prop-types';
import { MealCard, DrinkCard } from '../components/DoneCard';

const GetAllRecipes = (doneRecipes) =>
  doneRecipes.map((recipe, index) =>
    (recipe.type === 'comida' ? (
      <div key={recipe.id}>
        <MealCard
          id={recipe.id}
          index={index}
          image={recipe.image}
          area={recipe.area}
          category={recipe.category}
          name={recipe.name}
          doneDate={recipe.doneDate}
          tags={recipe.tags}
        />
      </div>
    ) : (
      <div key={recipe.id}>
        <DrinkCard
          id={recipe.id}
          index={index}
          image={recipe.image}
          alcoholicOrNot={recipe.alcoholicOrNot}
          name={recipe.name}
          doneDate={recipe.doneDate}
        />
      </div>
    )),
  );

const GetDrinks = (drinkRecipes) =>
  drinkRecipes.filter(({ type }) => type === 'bebida').map((recipe, index) => (
    <div key={recipe.id}>
      <DrinkCard
        id={recipe.id}
        index={index}
        image={recipe.image}
        alcoholicOrNot={recipe.alcoholicOrNot}
        name={recipe.name}
        doneDate={recipe.doneDate}
      />
    </div>
  ));

const GetMeals = (mealsRecipes) =>
  mealsRecipes.filter(({ type }) => type === 'comida').map((recipe, index) => (
    <div key={recipe.id}>
      <MealCard
        id={recipe.id}
        index={index}
        image={recipe.image}
        area={recipe.area}
        category={recipe.category}
        name={recipe.name}
        doneDate={recipe.doneDate}
        tags={recipe.tags}
      />
    </div>
  ));

const DonePageCotent = ({ category }) => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  if (category === 'all' && doneRecipes) {
    return GetAllRecipes(doneRecipes);
  } else if (category === 'bebida' && doneRecipes) {
    return GetDrinks(drinkRecipes);
  } else if (category === 'comida' && doneRecipes) {
    return GetMeals(mealsRecipes);
  }
  return <p>Nenhuma receita favorita...</p>;
};

DonePageCotent.propTypes = {
  category: PropTypes.string.isRequired,
};

export default DonePageCotent;
