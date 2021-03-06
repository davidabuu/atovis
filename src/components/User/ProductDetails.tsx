import React from 'react';
import { Button } from 'antd';
import Layout from '../Layout/Layout';
import { ProductDetailsStyled } from './UserStyled';
import { PlusOneOutlined } from '@material-ui/icons';
const ProductDetails = () => {
  return (
    <Layout>
      <div>
        <h1 className='center text-color h'>PRODUCT OVERVIEW</h1>
        <ProductDetailsStyled>
          <img src='/imh.png' alt='Alt' />
          <div className='product-info'>
            <p>Product name and information</p>
            <h1>$54.99</h1>
            <br></br>
            <div className='quantity'>
              <div className='qty'>
                <PlusOneOutlined/>
              </div>
              1
              <div className='qty'>
                 - 
              </div>
            </div>
            <br></br>
            <Button className='btn'>Proceed To Checkout</Button>
            <Button className='btn'>CHECKOUT</Button>
          </div>
        </ProductDetailsStyled>
      </div>
    </Layout>
  );
};

export default ProductDetails;
