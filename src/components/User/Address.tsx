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
        <div className='total'>
          <span>
            <p>Gross Total $45.00</p>
          </span>
          <span>Delivery Fee: $500</span>
          <span>
            <p>Net Total: $800.00</p>
          </span>
          <Button className='btn'>Proceed To Payment</Button>
        </div>
      </AddressStyled>
    </Layout>
  );
};

export default Address;
