/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Cartera from './Cartera';
import logo from '../logo.jpg';

const Cabeza = (props) => (

  <div className="cabeza">
    <div className="logo-h">
      <img
        src={logo}
        alt="Bet Terra"
      />
      <span>BetTerra</span>
    </div>
    <Cartera
      isConnected={props.wAddress !== 'desconectada'}
      wAddress={props.wAddress}
    />
  </div>
);

export default Cabeza;
