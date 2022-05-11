import React from 'react';
import { Button, Select } from 'antd';
import Layout from '../Layout/Layout';
import { ProductDetailsStyled } from './UserStyled';
import { PlusSquareIcon, MinusIcon } from '@chakra-ui/icons';
import Image from 'next/image';
const ProductDetails = () => {
  const { Option } = Select;
  return (
    <Layout>
      <div>
        <h1 className='center text-color h'>PRODUCT OVERVIEW</h1>
        <ProductDetailsStyled>
          <Image src='/imh.png' alt='Alt' />
          <div className='product-info'>
            <p>Product name and information</p>
            <h1>$54.99</h1>
            <br></br>
            <div className='quantity'>
              <div className='qty'><PlusSquareIcon/></div>1<div className='qty'><MinusIcon/></div>
            </div>
            <br></br>
            <Button className='button'>Add To Cart</Button>
          </div>
        </ProductDetailsStyled>
      </div>
    </Layout>
  );
};

export default ProductDetails;
