import React from 'react';
import { NotificationsActive } from '@material-ui/icons';
import { HeaderStyled } from './SignVendor/SignStyled';
import Link from 'next/link';
const Header = () => {
  return (
    <HeaderStyled>
      <h1>Hello, Uche</h1>
      <div className='search'>
        <input type='text' placeholder='Search' className='search-button' />
        <div className='noti'>
        <Link href='/vendor/notification'>
        <a>
        <NotificationsActive />
        </a>
        </Link>
        </div>
        <img src='/profile.png' alt='Hello' />
      </div>
    </HeaderStyled>
  );
};

export default Header;
