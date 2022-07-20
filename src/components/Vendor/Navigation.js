import React from 'react';
import Link from 'next/link';
import { NavigationStyle } from './SignVendor/SignStyled';
import { ArrowForwardIos } from '@material-ui/icons';
const Navigation = () => {
  return (
    <NavigationStyle>
      <ul>
        <li>
          <Link href='/vendor/seller'>
            <a>
              Seller
              <div >
                <ArrowForwardIos className='icon'/>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/vendor/business'>
            <a>
              <span> Business</span>
              <div >
                <ArrowForwardIos className='icon'/>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/vendor/payment-info
          '>
            <a>
              <span>Payment</span>
              <div>
                <ArrowForwardIos  className='icon' />
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/vendor/vendor-details'>
            <a>Summary</a>
          </Link>
        </li>
      </ul>
    </NavigationStyle>
  );
};

export default Navigation;
