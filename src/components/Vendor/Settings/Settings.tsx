import React from 'react';
import { Button, Input, Row } from 'antd';
import { useForm } from 'react-hook-form';
import SideNav from '../SideNav';
import Link from 'next/link';
import { SettingStyled } from './SettingStyled';
import { Header } from 'semantic-ui-react';
import MobileNavHead from '../SignVendor/MobileHead';
import VendorSearch from '../SignVendor/VendorSearch';
const VendorSettings = () => {
  const {
    control,
    formState: { errors },
  } = useForm();
  return (
    <SettingStyled>
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
      <Row>
        <form>
          <h1>Profile Setting</h1>
          <div>
            <label>Email</label>
            <br></br>
            <Input
              size='large'
              placeholder='Input Email'
              type='email'
              className='input'
            />
            <label>Email</label>
            <br></br>
            <Input
              size='large'
              placeholder='Input Phone Number'
              type='email'
              className='input'
            />
            <label>Address</label>
            <br></br>
            <Input
              size='large'
              placeholder='Input Address'
              type='email'
              className='input'
            />
            <div>
              <Button>Save Changes</Button>
            </div>
          </div>
          <div>
            <h1>Password</h1>
            <p>
              You can reset or change you password by clicking{' '}
              <Link href='/user/forgot-password'>
                <a>here</a>
              </Link>
            </p>
          </div>
          <div>
            <h1>Deactivate</h1>
            <p>
              Once you delete your account there is no going back please be
              certain
            </p>
            <div>
              <Button>Remove Account</Button>
            </div>
          </div>
        </form>
      </Row>
    </SettingStyled>
  );
};

export default VendorSettings;
