import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import React from 'react';
import { FooterDivStyle } from './FooterStyle';
import Sign from './Sign';

const FooterDiv = () => {
  return (
    <FooterDivStyle>
      <img src='/logo.png' alt='Hola' className='img' />
      <Sign />
      <div className='footer-info'>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Private Policy</li>
          <li>Terms and Condition</li>
        </ul>
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
        <p>&copy; Atovis 2022, Inc</p>
      </div>
    </FooterDivStyle>
  );
};

export default FooterDiv;
