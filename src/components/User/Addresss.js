import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { AddressStyled } from './UserStyled';
import { LocationOnOutlined } from '@material-ui/icons';
import { getCartTotal } from '../../redux/User/Cart/CartSlice';
const Address = () => {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((state) => state.cartSlice);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems, dispatch]);
  return (
    <Layout>
      <AddressStyled>
        <div className='address'>
          <div>
            <LocationOnOutlined />
            <h2>My Address</h2>
            <p>43 Hillview Community Abuja, Matiama FCT</p>
          </div>
          <div>
            <Link href='user/payment'>
              <a>Change</a>
            </Link>
          </div>
        </div>
      </AddressStyled>
      <div className='total'>
        <span>
          <h2>Total Amount : &#8358;{totalAmount} </h2>
        </span>
      </div>
      <div className='total'>
        <span>
          <p>Delivery Fee: $500</p>
        </span>
      </div>
      <div className='total'>
        <span>
          <p>Net Total: &#8358;{totalAmount} </p>
        </span>
      </div>
      <div className='btn-payment total'>
        <Button>Proceed To Payment</Button>
      </div>
    </Layout>
  );
};

export default Address;
