import { Add, Delete, Remove } from '@material-ui/icons';
import React from 'react';
import { RatingIcon } from 'semantic-ui-react';
import { CartStyle } from './CartContainerStyled';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import Layout from '../../Layout/Layout';

const CartContianer = () => {
  return (
    <UserWebLayout webtitle='Cart'>
      <div style={{ backgroundColor: '#fff' }}>
        <Layout>
          <CartStyle>
            <h1>MY CART</h1>
            <div className='cart-items'>
              <img src='/imh.png' alt='Hello' />
              <div className='items'>
                <div>
                  <p>Product Name and Description</p>
                  <RatingIcon />
                  <div style={{ color: 'var(--primary-color)' }}>
                    <span>
                      <Delete />
                    </span>
                  </div>
                </div>
                <div className='quantity'>
                  <div className='qty'>
                    <Add />
                  </div>
                  <div>1</div>
                  <div className='qty'>
                    <Remove />
                  </div>
                  <p>$54,600</p>
                </div>
              </div>
            </div>
          </CartStyle>
        </Layout>
      </div>
    </UserWebLayout>
  );
};

export default CartContianer;
