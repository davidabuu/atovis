import React from 'react';
import Link from 'next/link';
import { Dashboard, NotificationImportant, NotificationImportantOutlined, NotificationImportantRounded, NotificationsActive, Settings } from '@material-ui/icons';
import { SideNavStyled } from '../Vendor/SignVendor/SignStyled';
const SideNav = () => {
  return (
    <SideNavStyled>
      <div>
      <img src='/logo.png' alt='Logo' />
      <ul>
        <li>
          <a>
            <Dashboard className='color' />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a>
            <img src='/product.png' alt='Product' />
            <span>Products</span>
          </a>
        </li>
        <li>
          <a>
            <img src='/delivery.png' alt='Delivery' />
            <span>Customer</span>
          </a>
        </li>
        <li>
          <a>
            <img src='/delivery.png' alt='Delivery' />
            <span>Vendors</span>
          </a>
        </li>
        <li>
          <a>
            <img src='/delivery.png' alt='Delivery' />
            <span>Promotion</span>
          </a>
        </li>
        <li>
          <a>
            <img src='/delivery.png' alt='Delivery' />
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
