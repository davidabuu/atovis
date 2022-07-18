import React from 'react';
import { Button, Input, Row } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import SideNav from '../SideNav';
import Link from 'next/link';
import { SettingStyled } from './SettingStyled';
import { Header } from 'semantic-ui-react';
import MobileNavHead from '../SignVendor/MobileHead';
import VendorSearch from '../SignVendor/VendorSearch';
import { SignStyled } from '../SignVendor/SignStyled';
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
      <>
        <form>
          <h1>Profile Setting</h1>
          <div className='file'>
                <label>Email Address</label>
                <br></br>
                <Controller
                  control={control}
                  name='firstName'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input className='input' type='email' onChange={onChange} />
                  )}
                />
                {errors.firstName && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div className='file'>
                <label>Phone Number</label>
                <br></br>
                <Controller
                  control={control}
                  name='firstName'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input className='input' type='number' onChange={onChange} />
                  )}
                />
                {errors.firstName && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div className='file'>
                <label>Address</label>
                <br></br>
                <Controller
                  control={control}
                  name='firstName'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <textarea onChange={onChange} />
                  )}
                />
                {errors.firstName && (
                  <span className='error'>This field is required</span>
                )}
              </div>
            <div>
              <Button className='btn'>Save Changes</Button>
            </div>
          <div>
            <span>Password</span>
            <div>
              You can reset or change you password by clicking{' '}
              <Link href='/user/forgot-password'>
                <a>here</a>
              </Link>
            </div>
            <div>
            <span>Deactivate</span>
            <div>
              Once you delete your account there is no going back please be
              certain
            </div>
          </div>
          </div>
          <div>
              <Button className='remove'>Remove Account</Button>
            </div>
        </form>
      </>
    </SettingStyled>
  );
};

export default VendorSettings;
