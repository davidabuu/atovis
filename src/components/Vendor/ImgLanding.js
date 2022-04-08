import React from 'react';
import { ImgStyle } from '../Header/HeaderStyled';
import Layout from '../Layout/Layout';

const ImgLanding = () => {
  return (
    <Layout>
      <ImgStyle>
        <div className='img-info'>
          <h1>Make more money by selling with Atovis</h1>
          <button>Start Selling</button>
        </div>
      </ImgStyle>
    </Layout>
  );
};

export default ImgLanding;
