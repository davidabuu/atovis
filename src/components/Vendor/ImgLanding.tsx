import { Button } from 'antd';
import React from 'react';
import { ImgStyle } from '../Header/HeaderStyled';
import UserWebLayout from '../WebLayout/UserWebLayout';
const ImgLanding = () => {
  return (
    <UserWebLayout webtitle={'Vendor'}>
      <ImgStyle>
        <div className='img-info'>
          <h1>Make more money by selling with Atovis</h1>
          <Button>Start Selling</Button>
        </div>
      </ImgStyle>
    </UserWebLayout>
  );
};

export default ImgLanding;
