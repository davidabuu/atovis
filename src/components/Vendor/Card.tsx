import React from 'react';
import { CardStyled } from './CardStyled';

const Card = ({ heading, number: number}) => {
  return (
    <CardStyled>
      <h2>{heading}</h2>
      <div className='info'>{number}</div>
      <p>Items</p>
    </CardStyled>
  );
};

export default Card;
