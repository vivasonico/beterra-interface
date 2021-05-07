/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import uluna from '../Assets/uluna.png';
import uanc from '../Assets/uanc.png';
import umir from '../Assets/umir.png';

const TokenPicker = ({ currentToken, changeFunction }) => {
  const tokenOptions = [
    {
      value: 'uluna',
      text: 'Luna',
      img: uluna,
    },
    {
      value: 'uanc',
      text: 'Anchor',
      img: uanc,
    },
    {
      value: 'umir',
      text: 'MIR',
      img: umir,
    },
  ];

  const tokens = tokenOptions.map((e) => {
    if (currentToken === e.value) {
      return (
        <span
          className="token-picker-tokens"
          onClick={() => changeFunction(e.value)}
          key={e.value}
        >
          <img
            className="selected-token"
            src={e.img}
            alt={e.text}
          />
        </span>
      );
    }
    return (
      <span
        className="token-picker-tokens"
        onClick={() => changeFunction(e.value)}
        key={e.value}
      >
        <img
          src={e.img}
          alt={e.text}
        />
      </span>
    );
  });

  return (
    <div className="token-picker">
      {tokens}
    </div>
  );
};

export default TokenPicker;
