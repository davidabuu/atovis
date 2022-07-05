import React, { useState } from 'react';
import Link from 'next/link';
import { SideNavStyled } from './SignVendor/SignStyled';
import {
  Dashboard,
  Menu,
  NotificationImportant,
  NotificationImportantOutlined,
  NotificationImportantRounded,
  NotificationsActive,
  Settings,
} from '@material-ui/icons';
//import Image from 'next/image';
const SideNav = () => {
  return (
    <div>
      <SideNavStyled>
        <div>
          <div className='img'>
            <img src='/logo.png' alt='Log' />
          </div>
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
    </div>
  );
};

export default SideNav;
