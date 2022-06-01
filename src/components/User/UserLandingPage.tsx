import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import CategoryCard from './CategoryCard';
import FeaturedProduct from './FeaturedProduct';
import { HomePage } from './UserStyled';
import {Row, Col} from 'antd'
import Swipers from './Swiper';
import SkeletonLoader from './Skeleton';
//import AllProducts from '../../redux/User/Product/AllProducts';
const UserLandingPage = () => {
  return (
    <Layout>
      <HomePage>
        <Swipers />
        <div className='category'>
          <CategoryCard />
        </div>
      </HomePage>
      <Row>
          {[1, 2, 3, 4].map((_item, index) => (
            <Col>
              <SkeletonLoader key={index} />
            </Col>
          ))}
        </Row>
      <FeaturedProduct />
      {/* <AllProducts json={undefined}/> */}
    </Layout>
  );
};

export default UserLandingPage;
