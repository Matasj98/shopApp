import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.comp';
import Shop from './pages/shop/shop.comp';
import Header from './components/header/header.comp';

function App() {
  return (
    <div>
      <Header/>
      
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;