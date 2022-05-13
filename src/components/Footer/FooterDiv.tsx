import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import Image from 'next/image';
import React from 'react';
import { FooterDivStyle } from './FooterStyle';
import Sign from './Sign';

const FooterDiv = () => {
  return (
    <FooterDivStyle>
      {/* <Image src='/logo.png' alt='Hola' layout='fill' className='img' /> */}
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
        <h4 className='footer-info'>Connect with Us</h4>
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
