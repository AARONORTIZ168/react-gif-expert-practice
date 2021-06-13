import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const App = () => {
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
