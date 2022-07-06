import React, { useState } from 'react';
import Link from 'next/link';
import { SideNavStyled } from './SignVendor/SignStyled';
import {
  CloseRounded,
  Dashboard,
  ExitToApp,
  Menu,
  NotificationImportant,
  NotificationImportantOutlined,
  NotificationImportantRounded,
  NotificationsActive,
  Settings,
} from '@material-ui/icons';
//import Image from 'next/image';
const SideNav = () => {
  const [nav, setNav] = useState(false);
  const SetNav = () => setNav(!nav);
  return (
    <div className='side-nav'>
      <div className={`showNav ${nav ? 'hideNav' : ''}`}>
        <SideNavStyled>
          <div>
            <div className='img'>
              <img src='/logo.png' alt='Log' />
              <CloseRounded className='close' onClick={SetNav} />
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
    </div>
  );
};

export default SideNav;
