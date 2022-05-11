import React from 'react';
import Link from 'next/link';
import { Dashboard, Settings } from '@material-ui/icons';
import { SideNavStyled } from '../Vendor/SignVendor/SignStyled';
import Image from 'next/image';
const SideNav = () => {
  return (
    <SideNavStyled>
      <div>
      <Image src='/logo.png' alt='Logo' />
      <ul>
        <li>
          <a>
            <Dashboard className='color' />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a>
            <Image src='/product.png' alt='Product' />
            <span>Products</span>
          </a>
        </li>
        <li>
          <a>
            <Image src='/delivery.png' alt='Delivery' />
            <span>Customer</span>
          </a>
        </li>
        <li>
          <a>
            <Image src='/delivery.png' alt='Delivery' />
            <span>Vendors</span>
          </a>
        </li>
        <li>
          <a>
            <Image src='/delivery.png' alt='Delivery' />
            <span>Promotion</span>
          </a>
        </li>
        <li>
          <a>
            <Image src='/delivery.png' alt='Delivery' />
            <span>Delivery</span>
          </a>
        </li>
        <li>
          <a>
            <Settings className='color' />
            <span>Settings</span>
          </a>
        </li>
      </ul>
      </div>
    </SideNavStyled>
  );
};

export default SideNav;
