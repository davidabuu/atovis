import { ExitToAppSharp } from '@material-ui/icons';
import React from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import SideNav from '../SideNav';
import ActiveUsers from './ActiveUsers';
import { DashboardStyled } from './DashboardStyled';
import OverViewChart from './OverViewChart';
import Transaction from './Transaction';

const Dashboard = () => {
  return (
    <UserWebLayout webtitle='Dashboard'>
        <DashboardStyled>
       <div className='dash'>
       <p> <ExitToAppSharp/> Logout</p>
          <SideNav/>
       <div>
       <OverViewChart/>
       <div className='dash-info'>
        <Transaction/>
        <ActiveUsers/>
       </div>
       </div>
       </div>
        </DashboardStyled>
    </UserWebLayout>
  );
};

export default Dashboard;
