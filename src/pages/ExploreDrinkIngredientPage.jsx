import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { fetchDrinksIngredientList } from '../services/ServiceDrinks';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesContext from '../contexts/RecipesContext';

const ExploreDrinkIngredientPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const { setIngredientFilter } = useContext(RecipesContext);

  useEffect(() => {
    fetchDrinksIngredientList().then((e) => setIngredients(e.drinks));
  }, []);

  return (
    <div>
      <Header />
      <div>
        {ingredients.reduce((arr, e, index) => {
          if (index < 12) {
            return [
              ...arr,
              <Link to="/bebidas">
                <button
                  data-testid={`${index}-ingredient-card`}
                  onClick={() => setIngredientFilter(e.strIngredient1)}
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
