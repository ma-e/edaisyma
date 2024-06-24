import React from 'react';
import Snowflake from './Snowflake';
import './Snowfall.css'; // Create a CSS file for styling

const Snowfall = ({ count }) => {
  const snowflakes = Array.from({ length: count }, (v, k) => k);

  return (
    <div className="snowfall">
      {snowflakes.map((index) => (
        <Snowflake key={index} />
      ))}
    </div>
  );
};

export default Snowfall;
