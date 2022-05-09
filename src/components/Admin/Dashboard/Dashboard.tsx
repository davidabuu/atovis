import React from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import SideNav from '../SideNav';

const Dashboard = () => {
  return (
    <UserWebLayout webtitle='Dashboard'>
        <SideNav />
    </UserWebLayout>
  );
};

export default Dashboard;
