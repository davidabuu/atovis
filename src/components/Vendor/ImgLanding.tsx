import React from 'react';
import { ImgStyle } from '../Header/HeaderStyled';
import Layout from '../Layout/Layout';
import UserWebLayout from '../WebLayout/UserWebLayout';
const ImgLanding = () => {
  return (
    <UserWebLayout webtitle={'Vendor'}>
      <Layout>
        <ImgStyle>
          <div className='img-info'>
            <h1>Make more money by selling with Atovis</h1>
            <button>Start Selling</button>
          </div>
        </ImgStyle>
      </Layout>
    </UserWebLayout>
  );
};

export default ImgLanding;
