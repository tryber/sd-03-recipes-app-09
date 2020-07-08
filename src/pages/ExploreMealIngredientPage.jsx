import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { fetchMealsIngredientList } from '../services/ServiceMeals';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesContext from '../contexts/RecipesContext';

const ExploreMealIngredientPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const { setIngredientFilter } = useContext(RecipesContext);

  useEffect(() => {
    fetchMealsIngredientList().then((e) => setIngredients(e.meals));
  }, []);

  return (
    <div>
      <Header />
      <div>
        {ingredients.reduce((arr, e, index) => {
          if (index < 12) {
            return [
              ...arr,
              <Link to="/comidas">
                <button
                  data-testid={`${index}-ingredient-card`}
                  onClick={() => setIngredientFilter(e.strIngredient)}
                >
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${e.strIngredient}-Small.png`}
                    alt="thumbnail"
                    width="110px"
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
