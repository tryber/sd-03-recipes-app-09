import React from 'react';
import { useState } from 'react';
import FiltersButtons from '../components/FiltersButtons';
import DonePageContent from '../components/DonePageContent';

function DonePage() {
  const [category, setCategory] = useState('all');

  return (
    <div>
      <FiltersButtons handleClick={setCategory} />
      <DonePageContent category={category} />
    </div>
  );
}

export default DonePage;
