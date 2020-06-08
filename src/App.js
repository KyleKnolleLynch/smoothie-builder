import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/Home';
import Base from './components/Base';
import Fruit from './components/Fruit';
import Toppings from './components/Toppings';
import Confirm from './components/Confirm';

import './css/main.css';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/base' component={Base} />
        <Route exact path='/fruit' component={Fruit} />
        <Route exact path='/toppings' component={Toppings} />
        <Route exact path='/confirm' component={Confirm} />
      </Switch>
    </>
  );
};

export default App;
