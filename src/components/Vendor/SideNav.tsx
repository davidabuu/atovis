import React, { useState } from 'react';
import Link from 'next/link';
import { SideNavStyled } from './SignVendor/SignStyled';
import {
  CloseRounded,
  Dashboard,
  Settings,
} from '@material-ui/icons';
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
              <Link href='/vendor/dashboard'>
                <a>
                  <Dashboard className='color' />
                  <span>Dashboard</span>
                </a>
              </Link>
              <Link href='/vendor/inventory'>
                <a>
                  <img src='/product.png' alt='Product' />
                  <span>Products</span>
                </a>
              </Link>
              <Link href='/vendor/delivery'>
                <a>
                  <img src='/vendor/delivery.png' alt='Delivery' />
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
  );
};

export default SideNav;
