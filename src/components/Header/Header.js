import React, { useEffect, useState } from 'react';
import {  Input } from 'antd';
import { HeaderStyled, HeadStyle } from './HeaderStyled';
import { ShoppingCart, Person } from '@material-ui/icons';
import Link from 'next/link';
import { Search2Icon } from '@chakra-ui/icons';
import { HandIcon } from '../../ICONS/figmaIcons';
const Header = () => {
  const { Search } = Input;
  const [user, setUserName] = useState('');
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem('name'));
    setUserName(name);
  }, []);
  return (
    <HeadStyle>
      <div className='desktop'>
        <HeaderStyled>
          <img src='/logo.png' alt='Log.png' />
          <div className='search'>
            <Search placeholder='Search for a product' type={'text'} style={{width:'350px'}} />
          </div>
          <p className='flex'>
            {user ? (
              <p> &or; {`Hello ${user}`} <HandIcon/></p>
            ) : (
              <>
                Sign In <Person />
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
        <div className='search-icon'>
        <Search2Icon/>
        </div>
          <Link href='/user/sign-in'>
            <a>
              <p className='flex'>
                {user ? (
                  <p>{`Hello ${user}`} <HandIcon/> </p>
                ) : (
                  <>
                    Sign In <Person />
                  </>
                )}
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
