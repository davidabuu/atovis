import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { HeaderStyled, HeadStyle, MobileStyled } from './HeaderStyled';
import { ShoppingCart, Person, ArrowDropDown } from '@material-ui/icons';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from '../../redux/User/Cart/CartSlice';
import { LogoHolders } from '../Vendor/SignVendor/SignStyled';
const Header = () => {
  const [user, setUserName] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartSlice);
  console.log(totalCount, cartItems);
  const totalCount = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  const userMenuOpen = () => {
    setMenuOpen(!menuOpen);
    dispatch(getCartTotal());
  };
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem('name'));

    setMenuOpen(false);
    setUserName(name);
  }, []);
  return (
    <>
    <HeadStyle>
      <div className='desktop'>
        <HeaderStyled>
          <div className=''>
            <Image src='/logo.png' width={2080} height={853} alt='Home' />
          </div>
          <div className='search-product'>
            <input
              type='text'
              className='text'
              placeholder='Search for a product'
            />
            <input type='button' value={'Search'} className='search-button' />
          </div>
          <p className='flex'>
            <div
              style={{ cursor: 'pointer', transition: 'ease all 0.5s' }}
              onClick={userMenuOpen}>
              {user ? (
                <p className=''>
                  <div>
                    {' '}
                    {`Hello ${user}`}{' '}
                    <img src='/hand.png' alt='Hand' className='hand' />
                  </div>
                </p>
              ) : (
                <>
                  <div className='flex'>
                    <ArrowDropDown />
                    <Link href='/user/sign-in'>
                      <a className='sign'>
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
          <Link href='/user/cart'>
            <a style={{ color: '#fff' }}>
              <p className='cart'>
                <ShoppingCart />
                <p>{totalCount}</p>
              </p>
            </a>
          </Link>
        </HeaderStyled>
      </div>
      </HeadStyle>
      <MobileStyled>
        <div className='img'>
          <img src='/logo2.png' alt='Log' />
        </div>
        <div className='search-product'>
          <input
            type='text'
            className='text'
            placeholder='Search for a product'
          />
          <div className='cart-count'>
            <Link href='/user/cart'>
              <a>
                <p className='cart'>
                  <ShoppingCart />
                  <p>{totalCount}</p>
                </p>
              </a>
            </Link>
          </div>
        </div>
          <div className='mobile-view'>
            <a>
              <p>
                {user ? (
                  <p className='flexs'>
                    <h3>{`Hello ${user}`}</h3>
                    <img src='/hand.png' alt='Hand' className='hand' />
                  </p>
                ) : (
                  <div>
                    <Link href='/user/sign-in'>
                      <a className='signs'>
                        <p>Sign In</p>{' '}
                        <div>
                          <Person />
                        </div>
                      </a>
                    </Link>
                  </div>
                )}
              </p>
            </a>
          </div>
      </MobileStyled>
      </>
  );
};
export default Header;
