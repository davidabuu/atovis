import React from 'react';
import { Input } from 'antd';
import { VendorSearchStyle } from './SignStyled';
const VendorSearch = () => {
  return (
    <VendorSearchStyle>
      <h1>Hello, Uche</h1>
      <Input placeholder='Search' className='search' />
    </VendorSearchStyle>
  );
};

export default VendorSearch;
