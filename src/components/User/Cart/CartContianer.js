import { Add, Delete, Remove } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { RatingIcon } from 'semantic-ui-react';
import { CartStyle } from './CartContainerStyled';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import Layout from '../../Layout/Layout';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/User/Cart/CartSlice';

const CartContianer = () => {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((state) => state.cartSlice);
  useEffect(() => {
    dispatch(getCartTotal());
  });
  return (
    <UserWebLayout webtitle='Cart'>
      <div style={{ backgroundColor: '#fff' }}>
        <Layout>
          <CartStyle>
            <h1>MY CART</h1>
            {cartItems.map((_id, imageUrl, price, description, name) => (
              <div className='cart-items' key={_id}>
                <img src={imageUrl} alt='Hello' />
                <div className='items'>
                  <div>
                    <p>
                      {name}: {description}
                    </p>
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
                    <p>&#8358;{price}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className='total-amount'>
              <h2>Total Amount : &#8358;{totalAmount} </h2>
            </div>
            <Button>Clear Cart</Button>
          </CartStyle>
        </Layout>
      </div>
    </UserWebLayout>
  );
};

export default CartContianer;
