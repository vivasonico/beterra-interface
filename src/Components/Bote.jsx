/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import TokenPicker from './TokenPicker';
import TimePicker from './TimePicker';

import lunapouch from '../Assets/lunpouch.png';
import ancpouch from '../Assets/ancpouch.png';
import mirpouch from '../Assets/mirpouch.png';

export class Bote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: 'uluna',
      plazo: 'hourly',
      pronostico: 19,
    };
    this.changePlazo = this.changePlazo.bind(this);
    this.changeToken = this.changeToken.bind(this);
    this.handleChangePron = this.handleChangePron.bind(this);
  }

  changePlazo(e) {
    const { token } = this.state;
    const intermedio = e;
    if (intermedio === token) { return; }
    this.setState({ plazo: intermedio });
  }

  changeToken(e) {
    const { token } = this.state;
    const intermedio = e;
    if (intermedio === token) { return; }
    this.setState({ token: intermedio });
  }

  handleChangePron(e) {
    const intermedio = e.target.value;
    this.setState({ pronostico: intermedio });
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { token, plazo, pronostico } = this.state;
    const { lunap } = this.props;
    const formatToken = (coin) => coin.substr(1, 100).toUpperCase();

    // Temporally hardcoded for prototype

    let pouch = lunapouch;
    let madePred = 33.069;
    if (token === 'uluna') {
      pouch = lunapouch;
      madePred = 'notDone';
    }
    if (token === 'umir') {
      pouch = mirpouch;
      madePred = 15.061;
    }
    if (token === 'uanc') {
      pouch = ancpouch;
      madePred = 11.343;
    }

    // Helpers
    const transformNum = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
    const transformNum4 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 4 });

    const renderPred = madePred !== 'notDone'
      ? (
        <span>
          {`Your ${plazo} prediction for ${formatToken(token)} is `}
          <b>{transformNum4.format(madePred)}</b>
          <p>
            Last Luna (anc&mir pending) price:
            {transformNum4.format(lunap)}
          </p>
        </span>
      )
      : (
        <span>

          <p>
            {`You don't have a ${plazo} prediction for ${formatToken(token)}/USD`}
            {' '}
          </p>
          <p>
            Last Luna price:
            {transformNum4.format(lunap)}
          </p>
          <input
            type="number"
            placeholder="30"
            onChange={this.handleChangePron}
            step={0.001}
          />
          <p>
            <button type="submit">Place your prediction</button>
          </p>
        </span>
      );

    // This is hardcoded as well. Should be querying the SC

    let randomPote = (Math.random() + Math.random()) * (5000000);
    randomPote = transformNum.format(randomPote);
    return (
      <div className="bote">
        <TokenPicker
          currentToken={token}
          changeFunction={this.changeToken}
        />
        <div className="bote-arte">
          <img
            src={pouch}
            alt="moneybag"
            className="bote-arte-main"
          />
          <p>
            {`The current ${plazo} ${formatToken(token)} pot is: `}
            <span>{randomPote}</span>
          </p>

        </div>
        <div className="bote-der">
          <TimePicker
            currentTime={plazo}
            changeFunction={this.changePlazo}
          />
          <div className="bote-submiter">
            {renderPred}
          </div>
        </div>

      </div>
    );
  }
}

export default Bote;
