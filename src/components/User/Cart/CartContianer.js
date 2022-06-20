import { Add, Delete, Remove, ShoppingCart } from '@material-ui/icons';
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
  }, [cartItems, dispatch]);
  const deleteItem = (item) => {
    dispatch(deleteItemFromCart(item));
  };
  const decrease = () => {
    dispatch(decreaseItemFromCart(item));
  };
  const increase = (item) => {
    console.log('Hello');
    dispatch(addToCart(item));
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
            {cartItems.length == 0 ? (
              <div className='empty'>
                <h2>Your Shopping Cart is Empty</h2>
                <div>
                  <ShoppingCart />
                </div>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div className='cart-items' key={item._id}>
                    <img src={item.imageUrl} alt='Hello' />
                    <div className='items'>
                      <div>
                        <p>
                          {item.name} :{' '}
                          <span className='description'>
                            {item.description}
                          </span>
                        </p>
                        <RatingIcon />
                        <div style={{ color: 'var(--primary-color)' }}>
                          <span
                            onClick={() => deleteItem(item)}
                            style={{ cursor: 'pointer' }}>
                            <Delete />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='quantity'>
                      <div className='qty' onClick={() => increase(item)}>
                        <Add />
                      </div>
                      <div>{item.quantity}</div>
                      <div className='qty' onClick={() => decrease(item)}>
                        <Remove />
                      </div>
                      <p>&#8358;{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
                <div className='total-amount'>
                  <h2>Total Amount : &#8358;{totalAmount} </h2>
                </div>
                <div className='total-amount'>
                  <Button onClick={clearAllCartItems}>Clear Cart</Button>
                </div>
              </>
            )}
          </CartStyle>
        </Layout>
      </div>
    </UserWebLayout>
  );
};

export default CartContianer;
