/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const Cartera = ({ isConnected, wAddress }) => {
  let last10 = '';
  if (wAddress.length > 10) {
    last10 = wAddress.substring(wAddress.length - 10);
  }

  return (
    <div className="cartera">
      <div>
        <FontAwesomeIcon icon={faWallet} />
        Add:
        {isConnected
          ? (
            <span>
              {' '}
              ...
              {last10}
            </span>
          )
          : <span> Connect Wallet</span>}

      </div>
    </div>
  );
};

export default Cartera;
