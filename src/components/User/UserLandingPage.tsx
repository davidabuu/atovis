import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import CategoryCard from './CategoryCard';
import FeaturedProduct from './FeaturedProduct';
import { HomePage } from './UserStyled';
import Swipers from './Swiper';
import AllProducts from '../../redux/User/Product/AllProducts';
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
      <AllProducts json={undefined}/>
    </Layout>
  );
};

export default UserLandingPage;
