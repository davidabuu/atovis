import React from 'react';
import { ProfileIcon } from '../../../ICONS/figmaIcons';

import { Button, Input } from 'antd';
import { HeaderStyled, HeadStyle } from './HeaderStyled';
import Image from 'next/image';
const Header = () => {
  return (
    <HeadStyle>
      <div className='desktop'>
        <HeaderStyled>
          <Image src='/logo.png' alt='Log.png' />
          <div className='search'>
            <Input placeholder='Search for a product' type={'text'} />
            <Button type='default' className='searchBtn'>Search</Button>
          </div>
          <p className='flex'>
            Sign In <ProfileIcon />
          </p>
          <p className='flex'>
            Cart <Image src='/cart.png' className='icon' alt='Hello'></Image>
          </p>
        </HeaderStyled>
      </div>
      <div className='mobile-view'>
        <HeaderStyled>
          <Image src='/logo.png' alt='Log.png' />
          <p>
            Sign In
          </p>
          <p>
            <Image src='/cart.png' className='icon' alt='Hello'></Image>
          </p>
        </HeaderStyled>
      </div>
    </HeadStyle>
  );
};
export default Header;
