import React from 'react';
import { ProfileIcon } from '../../../ICONS/figmaIcons';

import { Button, Input } from 'antd';
import { HeaderStyled, HeadStyle } from './HeaderStyled';
import { ShoppingCart, Person } from '@material-ui/icons';
import Link from 'next/link';
import { getFromLocalStorage } from '../utils/usableFunction';
const Header = () => {
  const name = getFromLocalStorage('name');
  return (
    <HeadStyle>
      <div className='desktop'>
        <HeaderStyled>
          <img src='/logo.png' alt='Log.png' />
          <div className='search'>
            <Input placeholder='Search for a product' type={'text'} />
            <Button type='default' className='searchBtn'>
              Search
            </Button>
          </div>
          <p className='flex'>
            {name !== undefined ? (
              <p>`Hello ${name}`</p>
            ) : (
              <>
                Sign In <Person />{' '}
              </>
            )}
          </p>
          <p className='flex'>
            Cart <ShoppingCart />
          </p>
        </HeaderStyled>
      </div>
      <div className='mobile-view'>
        <HeaderStyled>
          <img src='/logo.png' alt='Log.png' />
          <Link href='/user/sign-in'>
            <a>
              <p className='flex'>
                Sign In <Person />
              </p>
            </a>
          </Link>
          <Link href='/user/cart'>
            <a>
              <p className='flex'>
                Cart <ShoppingCart />
              </p>
            </a>
          </Link>
        </HeaderStyled>
      </div>
    </HeadStyle>
  );
};
export default Header;
