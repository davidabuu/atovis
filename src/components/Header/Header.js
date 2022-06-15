import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { HeaderStyled, HeadStyle } from './HeaderStyled';
import { ShoppingCart, Person, ArrowDropDown, Menu } from '@material-ui/icons';
import Link from 'next/link';
import Image from 'next/image';
import { LogoHolder } from '../Vendor/SignVendor/SignStyled';
import { useSelector } from 'react-redux';
const Header = () => {
  const { Search } = Input;
  const [user, setUserName] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const {totalCount} = useSelector((state) => state.cartSlice)
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
                        <p>
                          Sign In <Person />
                        </p>
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
              <ShoppingCart /><p>{totalCount}</p>
            </p>
          </p>
        </HeaderStyled>
      </div>
      <div className=''>
        <HeaderStyled>
          <div className='mobile-view'>
            <div className=''>
              <Image src='/logo.png' width={2080} height={853} alt='Home' />
            </div>
            <a>
              <p className='flex'>
                {user ? (
                  <p>
                    <h3>{`Hello ${user}`}</h3>
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
            <Link href='/user/cart'>
              <a>
                <p className='flex'>
                  Cart  <ShoppingCart /><p>{totalCount}</p>
                </p>
              </a>
            </Link>
          </div>
        </HeaderStyled>
        <div className='searchs'>
          <Search
            placeholder='Search for a product'
            enterButton='Search'
            type={'text'}
            style={{ width: '300px' }}
          />
        </div>
      </div>
    </HeadStyle>
  );
};
export default Header;
