import React from 'react';
import {  ProfileIcon, CartIcon } from '../../../ICONS/figmaIcons';
import Link from 'next/link'
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
        <Link href='/user/sign-in'>
        <a>
        <p>
            Sign In
          </p>
        </a>
        </Link>
          <p>
            <CartIcon/>
          </p>
        </HeaderStyled>
      </div>
    </HeadStyle>
  );
};
export default Header;
