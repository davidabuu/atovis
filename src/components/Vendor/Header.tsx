import React from 'react';
import { Button, Col, Input, Row } from 'antd';
import { NotificationsActive } from '@material-ui/icons';
import { HeaderStyled } from './SignVendor/SignStyled';
const Header = () => {
  return (
    <HeaderStyled>
      <h1>Hello, Uche</h1>
      <div className='search'>
        <Input placeholder='Search for a product' type={'text'} />
        <Button type='default' className='searchBtn'>
          Search
        </Button>
        <div className='noti'>
          <NotificationsActive />
        </div>
        <img src='/profile.png' alt='Hello' />
      </div>
    </HeaderStyled>
  );
};

export default Header;
