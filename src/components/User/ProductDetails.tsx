import React from 'react';
import {Button, Select} from 'antd';
import Layout from '../Layout/Layout'
import { ProductDetailsStyled } from './UserStyled';
const ProductDetails  = () => {
    const {Option} = Select;
  return (
    <Layout>
    <div>
        <h1 className='center text-color'>PRODUCT OVERVIEW</h1>
        <ProductDetailsStyled>
            <img src='/imh.png' alt='Alt'/>
            <div>
                <p>Product name and information</p>
                <h1>$54.99</h1>
                <Select className='select' style={{ width: '40px' }}>
                    <Option>1</Option>
                    <Option>2</Option>
                    <Option>3</Option>
                    <Option>4</Option>
                  </Select>
                <Button>Add To Cart</Button>
            </div>
        </ProductDetailsStyled>
    </div>
    </Layout>
  );
};

export default ProductDetails;
