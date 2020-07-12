import React from 'react';
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
    ))
  );

const GetDrinks = (drinkRecipes) =>
  drinkRecipes.map((recipe, index) => (
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
  mealsRecipes.map((recipe, index) => (
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
  console.log(category);
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  console.log(doneRecipes);
  const drinkRecipes = doneRecipes
    ? doneRecipes.filter(({ type }) => type === 'bebida')
    : [];
  const mealsRecipes = doneRecipes
    ? doneRecipes.filter(({ type }) => type === 'comida')
    : [];

  if (category === 'all' && doneRecipes) {
    return GetAllRecipes(doneRecipes);
  } else if (category === 'bebida' && drinkRecipes) {
    return GetDrinks(drinkRecipes);
  } else if (category === 'comida' && mealsRecipes) {
    return GetMeals(mealsRecipes && mealsRecipes);
  }
  return <p>Nenhuma receita favorita...</p>;
};

export default DonePageCotent;
