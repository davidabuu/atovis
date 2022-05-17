
import React from 'react';
import Layout from '../Layout/Layout';
import CategoryCard from './CategoryCard';
import FeaturedProduct from './FeaturedProduct';
import { HomePage } from './UserStyled';

const UserLandingPage = () => {
  return (
    <Layout>
      <HomePage>
        <img src='/home.png' className='img' alt='Help' />
       <div className='category'>
       <CategoryCard  />
       </div>
      </HomePage>
      <FeaturedProduct/>
    </Layout>
  );
};

export default UserLandingPage;
