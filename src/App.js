import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/"></Route>
    <Route exact path="/About"><About /></Route>
    <Route exact path="/Contact"><Contact /></Route>
  </div>

);

export default App;
