import React, { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FiltersButtons from '../components/FiltersButtons';

export default function FavoritesPage() {
  const [filterRecipes, setFilterRecipes] = useState('All');

  return (
    <div>
      <Header />
      <FiltersButtons handleClick={setFilterRecipes} />
      <Footer />
    </div>
  );
}

// data é o id da receita
