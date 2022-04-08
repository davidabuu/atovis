import React from 'react';
import { ProfileIcon } from '../../../ICONS/figmaIcons';
import FooterDiv from '../Footer/FooterDiv';
import { HeaderStyled, HeadStyle } from './HeaderStyled';
const Header = () => {
  return (
    <HeadStyle>
      <div className='desktop'>
        <HeaderStyled>
          <img src='/logo.png' alt='Log.png' />
          <div className='search'>
            <input placeholder='Search for a product' type={'text'} />
            <input type='button' value='Search' />
          </div>
          <p>
            Sign In <ProfileIcon />
          </p>
          <p>
            Cart <img src='/cart.png' className='icon' alt='Hello'></img>
          </p>
        </HeaderStyled>
      </div>
      <div className='mobile-view'>
        <HeaderStyled>
          <img src='/logo.png' alt='Log.png' />
          <p>
            Sign In
          </p>
          <p>
            <img src='/cart.png' className='icon' alt='Hello'></img>
          </p>
        </HeaderStyled>
      </div>
    </HeadStyle>
  );
};
export default Header;
