import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import MealsPage from './pages/MealsPage';
import DrinksPage from './pages/DrinksPage';

function App() {
  return (
    <Switch>
      <Route path="/explorar/comidas/ingredientes" component="" />
      <Route path="/explorar/comidas/area" component="" />
      <Route path="/explorar/bebidas/ingredientes" component="" />
      <Route path="/comidas/:id/in-progress" component="" />
      <Route path="/bebidas/:id/in-progress" component="" />
      <Route path="/comidas/:id" component="" />
      <Route path="/bebidas/:id" component="" />
      <Route path="/explorar/comidas" component="" />
      <Route path="/explorar/bebidas" component="" />
      <Route path="/receitas-feitas" component="" />
      <Route path="/receitas-favoritas" component="" />
      <Route path="/comidas" component={MealsPage} />
      <Route path="/bebidas" component={DrinksPage} />
      <Route path="/explorar" component="" />
      <Route path="/perfil" component="" />
      <Route exact path="/" component={LoginPage} />
    </Switch>
  );
}

export default App;
