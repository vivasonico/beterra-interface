/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { LCDClient, Extension } from '@terra-money/terra.js';
import Cabeza from '../Components/Cabeza';
import Cuerpo from '../Components/Cuerpo';

export class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartera: 'desconectada',
      lunap: 'desconectada',
    };
    this.fetchCartera = this.fetchCartera.bind(this);
    this.fetchRates = this.fetchRates.bind(this);
  }

  componentDidMount() {
    const terra = new LCDClient({
      URL: 'https://lcd.terra.dev',
      chainID: 'tequila-0004',
    });
    this.fetchRates(terra);
    this.fetchCartera();
  }

  async fetchCartera() {
    //  Gets wallet to display on top
    const extension = new Extension();
    const respCartera = await (await extension.request('connect'));
    const { cartera } = this.state;
    if (respCartera.payload.address !== cartera) {
      this.setState({ cartera: respCartera.payload.address });
    }
  }

  async fetchRates(terra) {
    // fetch rates
    const exchangeRates = await terra.oracle.exchangeRate('uusd');
    const exchangeRate = await exchangeRates.toString();
    const remove4last = exchangeRate.slice(0, -4);

    this.setState({ lunap: remove4last });
  }

  render() {
    const { cartera, lunap } = this.state;
    // tryTerra(this.changeState);

    return (
      <div className="main-container">
        <Cabeza
          wAddress={cartera}
        />
        <Cuerpo
          lunap={lunap}
        />
      </div>
    );
  }
}

export default MainContainer;
