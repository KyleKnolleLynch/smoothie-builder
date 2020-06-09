import React, { useContext } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SmoothieContext } from './context/SmoothieContext';
import Header from './components/layout/Header';
import Home from './components/Home';
import Base from './components/Base';
import Fruit from './components/Fruit';
import Toppings from './components/Toppings';
import Confirm from './components/Confirm';
import Modal from './components/layout/Modal';

import './css/main.css';

const App = () => {
  const location = useLocation();
  const { setShowModal } = useContext(SmoothieContext);
  return (
    <>
      <Header />
      <Modal />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Switch location={location} key={location.key}>
          <Route exact path='/' component={Home} />
          <Route exact path='/base' component={Base} />
          <Route exact path='/fruit' component={Fruit} />
          <Route exact path='/toppings' component={Toppings} />
          <Route exact path='/confirm' component={Confirm} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
