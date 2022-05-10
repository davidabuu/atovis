import React from 'react';
import AdminLogin from '../../src/components/Admin/AdminLogin';
import UserWebLayout from '../../src/components/WebLayout/UserWebLayout';

const LoginAdmin = () => {
  return (
    <UserWebLayout webtitle='Admin Login'>
      <AdminLogin/>
    </UserWebLayout>
  );
};

export default LoginAdmin;
