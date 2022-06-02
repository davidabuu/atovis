import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { HeaderStyled, HeadStyle } from './HeaderStyled';
import { ShoppingCart, Person, ArrowDropDown, SearchSharp } from '@material-ui/icons';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  const { Search } = Input;
  const [user, setUserName] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const userMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem('name'));
    setMenuOpen(false);
    setUserName(name);
  }, []);
  return (
    <HeadStyle>
      <div className='desktop'>
        <HeaderStyled>
          <div className=''>
            <Image src='/logo.png' width={2080} height={853} alt='Home' />
          </div>
          <div className='search'>
            <Search
              placeholder='Search for a product'
              type={'text'}
              style={{ width: '350px' }}
            />
          </div>
          <p className='flex'>
            <div
              style={{ cursor: 'pointer', transition: 'ease all 0.5s' }}
              onClick={userMenuOpen}>
              {user ? (
                <p className=''>
                  <div>
                    {' '}
                    <ArrowDropDown />
                  </div>
                  <div>
                    {' '}
                    {`Hello ${user}`}{' '}
                    <img src='/hand.png' alt='Hand' className='hand' />
                  </div>
                </p>
              ) : (
                <>
                  <div>
                    <ArrowDropDown />
                  </div>{' '}
                  <div className=''>
                    <p>Sign In</p> <Person />
                  </div>
                </>
              )}
              <div className={`${menuOpen ? 'user-profile' : 'hide'}`}>
                <ul>
                  <li>
                    <Link href='/profile'>
                      <a>My Profile</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/profile'>
                      <a>My Orders</a>
                    </Link>
                  </li>
                  {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                  <li>Logout</li>
                </ul>
              </div>
            </div>
          </p>
          <p className='flex'>
            <p>
              Cart
              <ShoppingCart />{' '}
            </p>
          </p>
        </HeaderStyled>
      </div>
      <div className='mobile-view'>
        <HeaderStyled>
          <Image src='/logo.png' width={2080} height={853} alt='Home' />
          <div className='search-icon'>
            <SearchSharp />
          </div>
          <Link href='/user/sign-in'>
            <a>
              <p className='flex'>
                {user ? (
                  <p>
                    {' '}
                    <ArrowDropDown />
                    {`Hello ${user}`}{' '}
                    <img src='/hand.png' alt='Hand' className='hand' />
                  </p>
                ) : (
                  <>
                    <ArrowDropDown /> Sign In <Person />
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
