import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import ExplorePage from './pages/ExplorePage';
import ExplorePageByForD from './pages/ExplorePageByForD';
import ExplorePageByArea from './pages/ExplorePageByArea';

function App() {
  return (
    <Switch>
      <Route path="/explorar/comidas/ingredientes" component="" />
      <Route path="/explorar/comidas/area" component={ExplorePageByArea} />
      <Route path="/explorar/bebidas/ingredientes" component="" />
      <Route path="/comidas/:id/in-progress" component="" />
      <Route path="/bebidas/:id/in-progress" component="" />
      <Route path="/comidas/:id" component="" />
      <Route path="/bebidas/:id" component="" />
      <Route path="/explorar/comidas" component={ExplorePageByForD} />
      <Route path="/explorar/bebidas" component={ExplorePageByForD} />
      <Route path="/receitas-feitas" component="" />
      <Route path="/receitas-favoritas" component="" />
      <Route path="/comidas" component={MainPage} />
      <Route path="/bebidas" component={MainPage} />
      <Route path="/explorar" component={ExplorePage} />
      <Route path="/perfil" component={ProfilePage} />
      <Route exact path="/" component={LoginPage} />
    </Switch>
  );
}

export default App;
