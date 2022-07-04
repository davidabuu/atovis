import React from 'react';
import { Button, Input } from 'antd';
import { NotificationsActive } from '@material-ui/icons';
import { HeaderStyled } from './SignVendor/SignStyled';
const Header = () => {
  return (
    <HeaderStyled>
      <h1>Hello, Uche</h1>
      <div className='search'>
        <input type='text' placeholder='Search' className='search-button' />
        <div className='noti'>
          <NotificationsActive />
        </div>
        <img src='/profile.png' alt='Hello' />
      </div>
    </HeaderStyled>
  );
};

export default Header;
