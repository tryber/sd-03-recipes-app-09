import { fetchMeals, fetchFilterByArea } from '../services/ServiceMeals';

const getMeals = async (region, setRecipesData, setFilteredRecipes) => {
  if (region === 'All') {
    const { meals } = await fetchMeals();
    return setRecipesData([...meals.map((meal) => meal).slice(0, 12)]);
  }

  const { meals } = await fetchFilterByArea(region);
  return setFilteredRecipes([...meals.map((meal) => meal).slice(0, 12)]);
};

export default getMeals;
