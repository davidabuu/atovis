import React from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import Card from '../Card';
import Header from '../Header';
import SideNav from '../SideNav';
import MobileNavHead from '../SignVendor/MobileHead';
import VendorSearch from '../SignVendor/VendorSearch';
import VendorChart from '../VendorChart';
import { DashboardStyled } from './DashboardStyled';

const Dashboard = () => {
  return (
    <UserWebLayout webtitle='Dashboard'>
      <>
      <div className='desktop-head'>
          <SideNav />
        </div>
          <div className='desktop-head'>
            <Header />
          </div>
          <div className='mobile-head'>
            <MobileNavHead />
            <VendorSearch />
          </div>
          <VendorChart />
          <div className='cards'>
            <Card heading={'Products Sold'} number={'100'} />
            <Card heading={'Incomplete Orders'} number={'100'} />
            <Card heading={'Pending Orders'} number={'100'} />
            <Card heading={'Cancelled Orders'} number={'100'} />
          </div>
      </>
    </UserWebLayout>
  );
};

export default Dashboard;
