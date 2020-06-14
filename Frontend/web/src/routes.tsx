import { Route, BrowserRouter } from 'react-router-dom';

import React from 'react';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const src: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/create-point" component={CreatePoint} />
    </BrowserRouter>
  );
};

export default src;
