import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import MealsPage from './pages/MealsPage';
import DrinksPage from './pages/DrinksPage';
import ProfilePage from './pages/ProfilePage';
import ExplorePage from './pages/ExplorePage';
import DetailsPage from './pages/DetailsPage';
import ExplorePageBy from './pages/ExplorePageBy';

function App() {
  return (
<<<<<<< HEAD
    <center>
      <Switch>
        <Route path="/explorar/comidas/ingredientes" component="" />
        <Route path="/explorar/comidas/area" component="" />
        <Route path="/explorar/bebidas/ingredientes" component="" />
        <Route path="/comidas/:id/in-progress" component="" />
        <Route path="/bebidas/:id/in-progress" component="" />
        <Route path="/comidas/:id" component={DetailsPage} />
        <Route path="/bebidas/:id" component={DetailsPage} />
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
    </center>
=======
    <Switch>
      <Route path="/explorar/comidas/ingredientes" component="" />
      <Route path="/explorar/comidas/area" component="" />
      <Route path="/explorar/bebidas/ingredientes" component="" />
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
>>>>>>> 97f8cc3d0cc449c197b344be30774151dd94aa44
  );
}

export default App;
