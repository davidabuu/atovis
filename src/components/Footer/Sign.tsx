import React from 'react';

const Sign = () => {
  return (
    <div>
      <h4>Sign Up To Recieve Our Emails</h4>
      <div className='search'>
        <input placeholder='Search for a product' type={'text'} />
        <input type='button' value='Sign Up' />
      </div>
    </div>
  );
};

export default Sign;
