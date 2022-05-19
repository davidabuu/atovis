import React from 'react';
import Layout from '../Layout/Layout';
import CategoryCard from './CategoryCard';
import FeaturedProduct from './FeaturedProduct';
import { HomePage } from './UserStyled';
import Swipers from './Swiper'
const UserLandingPage = () => {
  return (
    <Layout>
      <HomePage>
        <Swipers />
        <div className='category'>
          <CategoryCard />
        </div>
      </HomePage>
      <FeaturedProduct />
    </Layout>
  );
};

export default UserLandingPage;
