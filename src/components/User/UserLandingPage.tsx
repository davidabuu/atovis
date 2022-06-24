import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import CategoryCard from './CategoryCard';
import FeaturedProduct from './FeaturedProduct';
import { HomePage } from './UserStyled';
import Swipers from './Swiper';

const UserLandingPage = () => {
  return (
     <div>
       <HomePage>
        <Swipers />
        <div>
          <CategoryCard />
        </div>
      </HomePage>
      <FeaturedProduct />
     </div>
  );
};

export default UserLandingPage;
