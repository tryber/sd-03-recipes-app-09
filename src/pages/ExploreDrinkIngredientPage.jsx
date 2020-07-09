import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { fetchDrinksIngredientList, fetchDrinksByIngredient } from '../services/ServiceDrinks';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesContext from '../contexts/RecipesContext';

const ExploreDrinkIngredientPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const { setIsIngredient, setDrinksData } = useContext(RecipesContext);

  useEffect(() => {
    fetchDrinksIngredientList().then((e) => setIngredients(e.drinks));
  }, []);

  return (
    <div>
      <Header />
      <div>
        {ingredients.reduce((arr, e, index) => {
          for (let i = 0; index < 12; i + 1) {
            return [
              ...arr,
              <Link to="/bebidas">
                <button
                  data-testid={`${index}-ingredient-card`}
                  onClick={() => fetchDrinksByIngredient(e.strIngredient1).then(({ drinks }) =>
                  setDrinksData(drinks), setIsIngredient(true),
                  )}
                >
                  <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${e.strIngredient1}-Small.png`}
                    alt="thumbnail"
                    width="110px"
                    data-testid={`${index}-card-img`}
                  />
                  <h5 data-testid={`${index}-card-name`}>{e.strIngredient1}</h5>
                </button>
              </Link>,
            ];
          }
          return arr;
        }, [])}
      </div>
      <Footer />
    </div>
  );
};

export default ExploreDrinkIngredientPage;
