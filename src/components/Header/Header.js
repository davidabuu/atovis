import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { HeaderStyled, HeadStyle } from './HeaderStyled';
import { ShoppingCart, Person, ArrowDropDown } from '@material-ui/icons';
import Link from 'next/link';
import Image from 'next/image';
import { LogoHolder } from '../Vendor/SignVendor/SignStyled';
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
              enterButton='Search'
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
                    <Link href='/user/sign-in'>
                      <a>
                        <p>Sign In</p> <Person />
                      </a>
                    </Link>
                  </div>
                </>
              )}
              <div className={`${menuOpen ? 'user-profile' : 'hide'}`}>
                <ul>
                  <li>
                    <Link href='/profile'>
                      <a>Category</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/profile'>
                      <a>Favourites</a>
                    </Link>
                  </li>
                  {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                  <li>
                    <Link href='/profile'>
                      <a>Notifications</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/profile'>
                      <a>Accounts</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/profile'>
                      <a>Logout</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </p>
          <p>
            <p className='cart'>
              Cart
              <ShoppingCart />{' '}
            </p>
          </p>
        </HeaderStyled>
      </div>
      <div className=''>
          <div className='logo'>
            <img src='/logo2.png' alt='Log' />
          </div>
        <div className='searchs'>
          <Search
            placeholder='Search for a product'
            enterButton='Search'
            type={'text'}
            style={{ width: '300px' }}
          />
        </div>
        <HeaderStyled>
          <div className='mobile-view'>
            <a>
              <p className='flex'>
                {user ? (
                  <p>
                    {' '}
                    <ArrowDropDown onClick={userMenuOpen} />
                    {`Hello ${user}`}{' '}
                    <img src='/hand.png' alt='Hand' className='hand' />
                  </p>
                ) : (
                  <div>
                    <Link href='/user/sign-in'>
                      <a>
                        Sign In <Person />
                      </a>
                    </Link>
                  </div>
                )}
              </p>
            </a>
            <div className={`${menuOpen ? 'user-profile' : 'hide'}`}>
              <ul className='ul'>
                <li>
                  <Link href='/profile'>
                    <a>Category</a>
                  </Link>
                </li>
                <li>
                  <Link href='/profile'>
                    <a>Favourites</a>
                  </Link>
                </li>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <li>
                  <Link href='/profile'>
                    <a>Notifications</a>
                  </Link>
                </li>
                <li>
                  <Link href='/profile'>
                    <a>Accounts</a>
                  </Link>
                </li>
                <li>
                  <Link href='/profile'>
                    <a>Logout</a>
                  </Link>
                </li>
              </ul>
            </div>
            <Link href='/user/cart'>
              <a>
                <p className='flex'>
                  Cart <ShoppingCart />
                </p>
              </a>
            </Link>
          </div>
        </HeaderStyled>
      </div>
    </HeadStyle>
  );
};
export default Header;
