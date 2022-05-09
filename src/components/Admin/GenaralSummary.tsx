import React from 'react';
import { GeneralStyled } from './AdminStyled';

export const GeneralSummary = () => {
  return (
    <GeneralStyled>
      <h1>General Summary</h1>
      <div className='gen'>
        <div className='info'>
          <h1>4.2</h1>
          <p>73k reviews</p>
        </div>
        <div className='info'>
          <h1>4.2</h1>
          <p>73k reviews</p>
        </div>
        <div className='info'>
          <h1>4.2</h1>
          <p>73k reviews</p>
        </div>
      </div>
    </GeneralStyled>
  );
};
