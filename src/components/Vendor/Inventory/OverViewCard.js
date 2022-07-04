import React from 'react';
import { OverViewStyle } from './InevStyle';

const OverViewCard = () => {
  return (
    <OverViewStyle>
      <h2 style={{ color: 'var(--primary-color)' }}>OverView</h2>
      <div className='over'>
        <div>
          <h1 style={{ color: 'green' }}>18,064</h1>
          <p>Available Products</p>
        </div>
        <div>
          <h1 style={{ color: 'red' }}>992, 750</h1>
          <p>in Monetary Value</p>
        </div>
      </div>
    </OverViewStyle>
  );
};

export default OverViewCard;
