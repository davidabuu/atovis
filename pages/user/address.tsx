import React from 'react';
import Address from '../../src/components/User/Addresss';
import UserWebLayout from '../../src/components/WebLayout/UserWebLayout';

const UserAddress = () => {
  return (
    <UserWebLayout webtitle='User Address'>
      <Address />
    </UserWebLayout>
  );
};

export default UserAddress;
