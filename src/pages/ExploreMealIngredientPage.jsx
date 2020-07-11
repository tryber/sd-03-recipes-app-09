import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { fetchMealsIngredientList, fetchMealsByIngredient } from '../services/ServiceMeals';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesContext from '../contexts/RecipesContext';

const ExploreMealIngredientPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const { setIsIngredient, setMealsData } = useContext(RecipesContext);

  useEffect(() => {
    fetchMealsIngredientList().then((e) => setIngredients(e.meals));
  }, []);

  return (
    <div>
      <Header />
      <div>
        {ingredients.reduce((arr, e, index) => {
          for (let i = 0; index < 12; i + 1) {
            return [
              ...arr,
              <Link to="/comidas">
                <button
                  data-testid={`${index}-ingredient-card`}
                  onClick={() => fetchMealsByIngredient(e.strIngredient).then(({ meals }) =>
                  setMealsData(meals), setIsIngredient(true),
                  )}
                >
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${e.strIngredient}-Small.png`}
                    alt="thumbnail"
                    width="100px"
                    data-testid={`${index}-card-img`}
                  />
                  <h5 data-testid={`${index}-card-name`}>{e.strIngredient}</h5>
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

export default ExploreMealIngredientPage;
