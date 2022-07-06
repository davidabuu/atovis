import React, { useState } from 'react';
import {
  NotificationsActive,
  Menu,
  Dashboard,
  CloseRounded,
  Settings,
} from '@material-ui/icons';
import { MobileHeadStyled, SideNavStyled } from './SignStyled';
import { Input } from 'antd';
import SideNav from '../SideNav';
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
      <div className='nav-flex'>
        <div onClick={SetNav} className='myNav'>
          <Menu />
        </div>
        <img src='/logo2.png' alt='Logo' className='' />
        <div className='icon'>
          <NotificationsActive />
        </div>
        <img src='/profile.png' alt='Hello' className='icon' />
      </div>
    </MobileHeadNavStyled>
  );
};

export default MobileNavHead;
