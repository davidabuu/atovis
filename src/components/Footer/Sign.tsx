import { Input,Button } from 'antd';
import React from 'react';

const Sign = () => {
  return (
    <div className='sign'>
      <h4 style={{color:'#fff'}}>Sign Up To Recieve Our Emails</h4>
      <div className='search'>
        <div className='search'>
          <Input placeholder='Search for a product' type={'text'} />
          <Button type='default' className='searchBtn'>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sign;
