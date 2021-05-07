/* eslint-disable import/no-named-as-default */
import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';
import MainContainer from './Container/MainContainer';

const App = () => (
  <div className="App">
    <MainContainer />
  </div>
);

export default hot(module)(App);
