import React from 'react';
import { Route } from 'react-router-dom';

import BookWidget from '../book_widget'

import './app.css';

const App = () => {
  return (
      <Route  path="/:params?"
              component={BookWidget}
              />
       
  )
};

export default App;
