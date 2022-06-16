import { Add, Delete, Remove } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { RatingIcon } from 'semantic-ui-react';
import { CartStyle } from './CartContainerStyled';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import Layout from '../../Layout/Layout';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  clearCart,
  decreaseItemFromCart,
  deleteItemFromCart,
  getCartTotal,
} from '../../../redux/User/Cart/CartSlice';

const CartContianer = () => {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((state) => state.cartSlice);
  useEffect(() => {
    dispatch(getCartTotal());
  });
  const deleteItem = (cartItems) => {
    dispatch(deleteItemFromCart(cartItems));
  };
  const decrease = (cartItems) => {
    dispatch(decreaseItemFromCart(cartItems));
  };
  const increase = (cartItems) => {
    dispatch(addToCart(cartItems));
  };
  const clearAllCartItems = () => {
    dispatch(clearCart());
  };
  return (
    <UserWebLayout webtitle='Cart'>
      <div style={{ backgroundColor: '#fff' }}>
        <Layout>
          <CartStyle>
            <h1>MY CART</h1>
            {cartItems.map(
              (_id, imageUrl, price, description, name, quantity) => (
                <div className='cart-items' key={_id}>
                  <img src={imageUrl} alt='Hello' />
                  <div className='items'>
                    <div>
                      <p>
                        {name}: {description}
                      </p>
                      <RatingIcon />
                      <div style={{ color: 'var(--primary-color)' }}>
                        <span onClick={deleteItem(cartItems)}>
                          <Delete />
                        </span>
                      </div>
                    </div>
                    <div className='quantity'>
                      <div className='qty' onClick={increase(cartItems)}>
                        <Add />
                      </div>
                      <div>{quantity}</div>
                      <div className='qty' onClick={decrease(cartItems)}>
                        <Remove />
                      </div>
                      <p>&#8358;{price * quantity}</p>
                    </div>
                  </div>
                </div>
              )
            )}
            <div className='total-amount'>
              <h2>Total Amount : &#8358;{totalAmount} </h2>
            </div>
            <Button onClick={clearAllCartItems}>Clear Cart</Button>
          </CartStyle>
        </Layout>
      </div>
    </UserWebLayout>
  );
};

export default CartContianer;
