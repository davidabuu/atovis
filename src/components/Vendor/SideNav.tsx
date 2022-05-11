import React from 'react';
import Link from 'next/link';
import { SideNavStyled } from './SignVendor/SignStyled';
import { Dashboard, NotificationImportant, NotificationImportantOutlined, NotificationImportantRounded, NotificationsActive, Settings } from '@material-ui/icons';
import Image from 'next/image';
const SideNav = () => {
  return (
    <SideNavStyled>
      <div>
      <Image src='/logo2.png' alt='Log' />
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
