import { Button, Input } from 'antd';
import React from 'react';
import { CartIcon, ProfileIcon } from '../../../ICONS/figmaIcons';
import FooterDiv from '../Footer/FooterDiv';
import { HeaderStyled, ImgStyle } from './HeaderStyled';
const Header = () => {
  return (
    <div>
      <HeaderStyled>
        <img src='./logo.png' alt='Log.png' />
        <div className='search'>
          <input placeholder='Search for a product' type={'text'} />
          <input type='button' value='Search' />
        </div>
        <a
          href='
      '>
          Sign In <ProfileIcon />
        </a>
        <p>
          Cart <img src='./cart.png' alt='Hello'></img>
        </p>
      </HeaderStyled>
      <ImgStyle>
        <div className='img-info'>
          <h1>Make more money by selling with Atovis</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            asperiores debitis consequuntur hic, minima laboriosam.
          </p>
          <button>Start Selling</button>
        </div>
      </ImgStyle>
      <FooterDiv />
    </div>
  );
};
export default Header;
