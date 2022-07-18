import React, { useState } from 'react';
import {
  NotificationsActive,
  Menu,
  Dashboard,
  CloseRounded,
  Settings,
} from '@material-ui/icons';
import {SideNavStyled } from './SignStyled';
import Link from 'next/link';
import { MobileHeadNavStyled } from '../Delivery/DeliveryStyle';
const MobileNavHead = () => {
  const [nav, setNav] = useState(false);
  const SetNav = () => setNav(!nav);
  return (
    <MobileHeadNavStyled>
      <div className='side-nav'>
        <div className={`showNav ${nav ? 'hideNav' : ''}`}>
          <SideNavStyled>
            <div>
              <div className='img'>
                <img src='/logo.png' alt='Log' />
                <CloseRounded className='close' onClick={SetNav} />
              </div>
              <ul>
                <Link href='/vendor/delivery'>
                  <a>
                    <Dashboard className='color' />
                    <span>Dashboard</span>
                  </a>
                </Link>
                <Link href='/vendor/create-produtc'>
                  <a>
                    <img src='/product.png' alt='Product' />
                    <span>Products</span>
                  </a>
                </Link>
                <Link href='/vendor/delivery'>
                  <a>
                    <img src='/delivery.png' alt='Delivery' />
                    <span>Delivery</span>
                  </a>
                </Link>
                <Link href='/vendor/settings'>
                  <a>
                    <Settings className='color' />
                    <span>Settings</span>
                  </a>
                </Link>
              </ul>
            </div>
          </SideNavStyled>
        </div>
      </div>
      <div className='nav-flex'>
        <div onClick={SetNav} className='myNav'>
          <Menu />
        </div>
        <img src='/logo2.png' alt='Logo' className='' />
        <div className='icon'>
        <Link href='/vendor/notification'>
        <a>
        <NotificationsActive />
        </a>
        </Link>
        </div>
        <div className='noti'>
       
        </div>
        <img src='/profile.png' alt='Hello' className='icon' />
      </div>
    </MobileHeadNavStyled>
  );
};

export default MobileNavHead;
