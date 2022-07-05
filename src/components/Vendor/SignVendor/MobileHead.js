import React, { useState } from 'react';
import { NotificationsActive, Menu, Dashboard } from '@material-ui/icons';
import { MobileHeadStyled, SideNavStyled } from './SignStyled';
import { Input } from 'antd';
import SideNav from '../SideNav';
const MobileHead = () => {
  return (
    <div style={{ background: '#f4f4f4' }}>
      <MobileHeadStyled>
        <div className='menu'>
          <img src='/logo.png' alt='Logo' />
          <div className='noti'>
            <NotificationsActive />
          </div>
          <img src='/profile.png' alt='Hello' />
        </div>
        <div>
          <h1>Hello, Uche</h1>
          <Input type='text' placeholder='Search' className='search-button' />
        </div>
      </MobileHeadStyled>
    </div>
  );
};

export default MobileHead;
