import React from 'react';
import Layout from '../../src/components/Layout/Layout';
import MyAccount from '../../src/components/User/Account/MyAccount';
import UserWebLayout from '../../src/components/WebLayout/UserWebLayout';

const AccountUser = () => {
  return (
    <UserWebLayout webtitle='Account'>
      <div style={{ background: '#f4f4f4' }}>
        {/* <Layout>
          <MyAccount />
        </Layout> */}
      </div>
    </UserWebLayout>
  );
};

export default AccountUser;
