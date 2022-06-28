import { Add, Delete, Remove, ShoppingCart } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { RatingIcon } from 'semantic-ui-react';
import { CartStyle, MobileCartStyle } from './CartContainerStyled';
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
import FooterDiv from '../../Footer/FooterDiv';

const MobileCart = () => {
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
        <MobileCartStyle>
        <div className='img'>
          <img src='/logo2.png' alt='Log' />
        </div>
          <div className='head'>
            <p className='p'>&lt;</p>
            <p>MY CART</p>
          </div>
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
                  <div>
                    <div>
                      {item.name}
                    </div>
                    <div className='price'>&#8358;{item.price * item.quantity}</div>
                    <div>
                      <div>
                        <span
                          className='delete'
                          onClick={() => deleteItem(item)}
                          style={{ cursor: 'pointer' }}>
                          <div>
                            {' '}
                            <Delete />
                          </div>{' '}
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
                  </div>
                </div>
              ))}
                <div className='total-amount'>
                  <h2>Total Amount : &#8358;{totalAmount} </h2>
                </div>
                <div style={{textAlign:'center'}}>
                  <Button className='cart-btns' onClick={clearAllCartItems}>Clear Cart</Button>
                </div>
                <div style={{textAlign:'center'}}>
                  <Button className='cart-btns'>Proceed To CheckOut</Button>
                </div>
            </>
            
          )}
        </MobileCartStyle>
      </div>
    </UserWebLayout>
  );
};

export default MobileCart;
