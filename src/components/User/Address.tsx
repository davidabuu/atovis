import React from 'react';
import Layout from '../Layout/Layout';
import { Button } from 'antd';
import Link from 'next/link';
import { AddressStyled } from './UserStyled';
import { LocationOnOutlined } from '@material-ui/icons';
const Address = () => {
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
          <p>Gross Total $45.00</p>
        </span>
      </div>
      <div className='total'>
        <span>
          <p>Delivery Fee: $500</p>
        </span>
      </div>
      <div className='total'>
        <span>
          <p>Net Total: $800.00</p>
        </span>
      </div>
      <div className='btn-payment total'>
        <Button>Proceed To Payment</Button>
      </div>
    </Layout>
  );
};

export default Address;
