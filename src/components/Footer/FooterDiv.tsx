import {
  Category,
  Favorite,
  Home,
  Person,
  Facebook,
  Instagram,
  Twitter,
} from '@material-ui/icons';
import Link from 'next/link';
import React from 'react';
import { FooterDivStyle, MobileStyle } from './FooterStyle';
import Sign from './Sign';

const FooterDiv = () => {
  return (
    <div>
      <div className='footer-desktop'>
        <FooterDivStyle>
          <img src='/logo.png' alt='Hola' className='img' />
          <Sign />
          <div className='footer-info'>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Private Policy</p>
            <p>Terms and Condition</p>
          </div>
          <div>
            <p className='footer-info'>CONNECT WITH US</p>
            <div className='social'>
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>
          <div>
            <p>&copy; Atovis 2022, All Rights Reserved Inc</p>
          </div>
        </FooterDivStyle>
      </div>
      <div className='footer-mobile'>
        <MobileStyle>
          <div className='center'>
            <Link href='/user/landing-page'>
              <a>
                <Home />
                <p>Home</p>
              </a>
            </Link>
          </div>
          <div className='center'>
            <Link href='/user/landing-page'>
              <a>
                <Category />
                <p>Category</p>
              </a>
            </Link>
          </div>
          <div className='center'>
            <Link href='/user/landing-page'>
              <a>
                <Favorite />
                <p>Favourite</p>
              </a>
            </Link>
          </div>
          <div className='center'>
            <Link href='/user/landing-page'>
              <a>
                {' '}
                <Person />
                <p>Account</p>
              </a>
            </Link>
          </div>
        </MobileStyle>
      </div>
    </div>
  );
};

export default FooterDiv;
