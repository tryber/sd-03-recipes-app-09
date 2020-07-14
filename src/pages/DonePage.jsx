import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import FiltersButtons from '../components/FiltersButtons';
import DonePageContent from '../components/DonePageContent';

function DonePage() {
  const [category, setCategory] = useState('all');

  return (
    <div>
      <Header />
      <FiltersButtons handleClick={setCategory} />
      <DonePageContent category={category} />
    </div>
  );
}

export default DonePage;
