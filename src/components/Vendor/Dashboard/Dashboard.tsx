import React from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import Card from '../Card';
import Header from '../Header';
import SideNav from '../SideNav';
import MobileNavHead from '../SignVendor/MobileHead';
import VendorSearch from '../SignVendor/VendorSearch';
import VendorChart from '../VendorChart';
import { DashboardStyled } from './DashboardStyled';
import DashBoardCategory from './DashBoardCategory'
const Dashboard = () => {
  return (
    <UserWebLayout webtitle='Dashboard'>
      <DashboardStyled>
        <div className='desktop-head'>
          <SideNav />
        </div>
        <div className='head'>
          <div className='desktop-head'>
            <Header />
          </div>
          <div className='mobile-head'>
            <MobileNavHead />
            <VendorSearch />
          </div>
          <div>
          <VendorChart />
          <DashBoardCategory/>
          </div>
          <div className='cards'>
            <Card heading={'Products Sold'} number={'100'} />
            <Card heading={'Incomplete Orders'} number={'100'} />
            <Card heading={'Pending Orders'} number={'100'} />
            <Card heading={'Cancelled Orders'} number={'100'} />
          </div>
        </div>
      </DashboardStyled>
    </UserWebLayout>
  );
};

export default Dashboard;
