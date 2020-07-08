import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import MealsPage from './pages/MealsPage';
import DrinksPage from './pages/DrinksPage';
import ProfilePage from './pages/ProfilePage';
import ExplorePage from './pages/ExplorePage';
import ExplorePageBy from './pages/ExplorePageBy';
import ExploreMealIngredientPage from './pages/ExploreMealIngredientPage';
import ExploreDrinkIngredientPage from './pages/ExploreDrinkIngredientPage';

function App() {
  return (
    <Switch>
      <Route path="/explorar/comidas/area" component="" />
      <Route path="/explorar/comidas/ingredientes" component={ExploreMealIngredientPage} />
      <Route path="/explorar/bebidas/ingredientes" component={ExploreDrinkIngredientPage} />
      <Route path="/comidas/:id/in-progress" component="" />
      <Route path="/bebidas/:id/in-progress" component="" />
      <Route path="/comidas/:id" component="" />
      <Route path="/bebidas/:id" component="" />
      <Route path="/explorar/comidas" component={ExplorePageBy} />
      <Route path="/explorar/bebidas" component={ExplorePageBy} />
      <Route path="/receitas-feitas" component="" />
      <Route path="/receitas-favoritas" component="" />
      <Route path="/comidas" component={MealsPage} />
      <Route path="/bebidas" component={DrinksPage} />
      <Route path="/explorar" component={ExplorePage} />
      <Route path="/perfil" component={ProfilePage} />
      <Route exact path="/" component={LoginPage} />
    </Switch>
  );
}

export default App;
