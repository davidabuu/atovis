import React from 'react';
import FooterDiv from '../src/components/Footer/FooterDiv';
import Header from '../src/components/Header/Header';
import Layout from '../src/components/Layout/Layout';
import UserLandingPage from '../src/components/User/UserLandingPage';


const index = () => {
  return (
      <>
      <Header/>
        <UserLandingPage/>
        <FooterDiv/>
      </>
  );
};

export default index;
