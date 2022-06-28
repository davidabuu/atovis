import { Add, Delete, Remove, ShoppingCart } from '@material-ui/icons';
import React, { useEffect } from 'react';
import MobileCart from './MobileCart';
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
import Header from '../../Header/Header';
import FooterDiv from '../../Footer/FooterDiv';

const CartContianer = () => {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((state) => state.cartSlice);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems, dispatch]);
  const deleteItem = (item) => {
    dispatch(deleteItemFromCart(item));
  };
  const decrease = (item) => {
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
        <CartStyle>
          <div className='desktop-cart'>
            <div className='header'>
              <Header />
            </div>
            <h1 className='h1'>MY CART</h1>
            {cartItems.length == 0 ? (
              <div className='empty'>
                <h2>Your Shopping Cart is Empty</h2>
                <div>
                  <ShoppingCart />
                </div>
              </div>
            ) : (
              <div className='desktop-cart'>
                {cartItems.map((item) => (
                  <div className='cart-items' key={item._id}>
                    <img src={item.imageUrl} alt='Hello' />
                    <div>
                      <p>
                        {item.name} 
                      
                      </p>
                      <RatingIcon />
                      <div style={{ color: 'var(--primary-color)' }}>
                        <span
                          className='delete'
                          onClick={() => deleteItem(item)}
                          style={{ cursor: 'pointer' }}>
                          <div>
                            {' '}
                            <Delete />
                          </div>
                          <p>Remove</p>
                        </span>
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
                    </div>
                    <p className='price'>
                      Price: &#8358;{item.price * item.quantity}
                    </p>
                  </div>
                ))}
                <div className='total-amount '>
                  <h2>Total Amount : &#8358;{totalAmount} </h2>
                </div>
                <div className='total-amount  '>
                  <Button className='cart-btns' onClick={clearAllCartItems}>
                    Clear Cart
                  </Button>
                </div>
                <div className='total-amount'>
                  <Button className='cart-btns'>Proceed To CheckOut</Button>
                </div>
              </div>
            )}
          </div>
          <div className='mobile-cart'>
            <MobileCart />
          </div>
        </CartStyle>
        <FooterDiv />
      </div>
    </UserWebLayout>
  );
};

export default CartContianer;
