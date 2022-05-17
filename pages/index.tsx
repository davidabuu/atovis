//import { Col, Input, Row } from 'antd';
import React from 'react';
import LandingPage from '../src/components/LandingPage/LandingPage';
// import { GeneralSummary } from '../src/components/Admin/GenaralSummary';
//import Layout from '../src/components/Layout/Layout';
import UserWebLayout from '../src/components/WebLayout/UserWebLayout';

const index = () => {
  return (
    <UserWebLayout webtitle='Home Page'>
      {/* <Layout>
        <GeneralSummary/>
      </Layout> */}
      <LandingPage/>
    </UserWebLayout>
  );
};

export default index;
