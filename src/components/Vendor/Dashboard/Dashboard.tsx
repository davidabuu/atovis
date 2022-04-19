import React from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import Card from '../Card';
import Header from '../Header';
import SideNav from '../SideNav';
import { DashboardStyled } from './DashboardStyled';

const Dashboard = () => {
  return (
    <UserWebLayout webtitle='Dashboard'>
      <DashboardStyled>
        <SideNav />
        <div className='header'>
          <div className='head'>
            <Header />
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
