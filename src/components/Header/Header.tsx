import React from 'react';
import { ProfileIcon } from '../../../ICONS/figmaIcons';

import { Button, Input } from 'antd';
import { HeaderStyled, HeadStyle } from './HeaderStyled';
const Header = () => {
  return (
    <HeadStyle>
      <div className='desktop'>
        <HeaderStyled>
          <img src='/logo.png' alt='Log.png' />
          <div className='search'>
            <Input placeholder='Search for a product' type={'text'} />
            <Button type='default' className='searchBtn'>Search</Button>
          </div>
          <p className='flex'>
            Sign In <ProfileIcon />
          </p>
          <p className='flex'>
            Cart <img src='/cart.png'  alt='Hello'></img>
          </p>
        </HeaderStyled>
      </div>
      <div className='mobile-view'>
        <HeaderStyled>
          <img src='/logo.png' alt='Log.png' />
          <p>
            Sign In
          </p>
          <p>
            <img src='/cart.png' className='icon' alt='Hello'></img>
          </p>
        </HeaderStyled>
      </div>
    </HeadStyle>
  );
};
export default Header;
