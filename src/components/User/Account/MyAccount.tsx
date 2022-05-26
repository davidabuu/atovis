import { ArrowForward } from '@material-ui/icons';
import React, { useState } from 'react';
import Link from 'next/link';
import { AccountStyled } from './AccountStyled';
import MyBio from './MyBio';
import LoginInfo from './LoginInfo';
import Address from './Address';
const MyAccount = () => {
  const [bio, showBio] = useState(false);
  const [login, showLogin] = useState(false);
  const [address, showAddress] = useState(false);
  const Bio = () => {
    showBio(true);
    showLogin(false);
    showAddress(false);
  };
  const Login = () => {
    showBio(false);
    showLogin(true);
    showAddress(false);
  };
  const MyAddress = () => {
    showBio(false);
    showLogin(false);
    showAddress(true);
  };
  return (
    <div>
      <div>
        <p className='prof'>Profile</p>
        <div className='account-flex'>
          <div>
            <AccountStyled>
              <div className='profile'>
                <a onClick={Bio}>
                  <li>My Bio</li>
                  <div className='arrow'>{'>'}</div>
                </a>

                <a  onClick={Login}>
                  <li>Login Info</li>
                  <div className='arrow'>{'>'}</div>
                </a>
              
                  <a  onClick={MyAddress}>
                    <li>Address</li>
                    <div className='arrow'>{'>'}</div>
                  </a>
                
                <Link href='/user/account/orders'>
                  <a>
                    <li>My Orders</li>
                    <div className='arrow'>{'>'}</div>
                  </a>
                </Link>
              </div>
            </AccountStyled>
            <p className='prof'>Legal</p>
            <AccountStyled>
              <div className='profile'>
                <Link href='/user/account/my-bio'>
                  <a>
                    <li>Privacy Policy</li>
                    <div className='arrow'>{'>'}</div>
                  </a>
                </Link>
                <Link href='/user/account/login-info'>
                  <a>
                    <li>Terms and Conditions</li>
                    <div className='arrow'>{'>'}</div>
                  </a>
                </Link>
                <Link href='/user/account/address'>
                  <a>
                    <li>About Us</li>
                    <div className='arrow'>{'>'}</div>
                  </a>
                </Link>
              </div>
            </AccountStyled>
          </div>
          <div className='bio'>
            {bio ? (
              <div>
                {' '}
                <MyBio />{' '}
              </div>
            ) : (
              ''
            )}
            {login ? (
              <div>
                {' '}
                <LoginInfo />{' '}
              </div>
            ) : (
              ''
            )}
            {address ? (
              <div>
                {' '}
                <Address />{' '}
              </div>
            ) : (
              ''
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
