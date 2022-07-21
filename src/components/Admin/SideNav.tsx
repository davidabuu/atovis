import { Link } from '@material-ui/core';
import { CloseRounded, Dashboard, Settings } from '@material-ui/icons';
import React, { useState } from 'react';
import { SideNavStyled } from '../Vendor/SignVendor/SignStyled';
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
              <Link href='/admin/dashboard'>
                <a>
                  <Dashboard className='color' />
                  <span>Dashboard</span>
                </a>
              </Link>
              <Link href='/admin/revenue'>
                <a>
                  <img src='/product.png' alt='Product' />
                  <span>Revenue</span>
                </a>
              </Link>
              <Link href='/admin/customers'>
                <a>
                  <img src='/delivery.png' alt='Delivery' />
                  <span>Customers</span>
                </a>
              </Link>
              <Link href='/vendor/settings'>
                <a>
                  <Settings className='color' />
                  <span>Vendors</span>
                </a>
              </Link>
              <Link href='/vendor/settings'>
                <a>
                  <Settings className='color' />
                  <span>Promotions</span>
                </a>
              </Link>
              <Link href='/vendor/settings'>
                <a>
                  <Settings className='color' />
                  <span>Deliveru</span>
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
