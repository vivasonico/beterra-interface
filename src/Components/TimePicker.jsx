/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const TimePicker = ({ currentTime, changeFunction }) => {
  const timeOptions = [
    {
      value: 'hourly',
      text: 'End of Hour',
    },
    {
      value: 'daily',
      text: 'End of Day',
    },
    {
      value: 'weekly',
      text: 'End of Week',
    },
    {
      value: 'monthly',
      text: 'End of Month',
    },
    {
      value: 'quarterly',
      text: 'End of Quarter',
    },
    {
      value: 'yearly',
      text: 'End of Year',
    },
  ];

  const options = timeOptions.map((e) => {
    if (e.value === currentTime) {
      return (
        <span key={e.value} className="selected-time" onClick={() => changeFunction(e.value)}>{e.text}</span>
      );
    }
    return (
      <span key={e.value} onClick={() => changeFunction(e.value)}>{e.text}</span>
    );
  });

  return (
    <div className="time-picker">
      {options}
    </div>
  );
};

export default TimePicker;
