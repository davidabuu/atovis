import React from 'react';
import AdminLogin from '../../src/components/Admin/AdminLogin';
import Dashboard from '../../src/components/Admin/Dashboard/Dashboard';
import UserWebLayout from '../../src/components/WebLayout/UserWebLayout';

const AdminDashboard = () => {
  return (
    <UserWebLayout webtitle='Admin DashBoard'>
      <Dashboard />
    </UserWebLayout>
  );
};

export default AdminDashboard;
