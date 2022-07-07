import React from 'react';
import { Button, Input, Row } from 'antd';
import { Controller, useForm } from 'react-hook-form';
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
          <div className='file'>
            <label>Email</label>
              <Controller
                control={control}
                name='email'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input type='email' onChange={onChange} className='input' />
                )}
              />
              {errors.email && (
                <span className='error'>This field is required</span>
              )}
            </div>
            <div className='file'>
              <label>Phone Number</label>
              <Controller
                control={control}
                name='number'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input
                    type='number'
                    
                    className='input'
                    onChange={onChange}
                  />
                )}
              />
              {errors.email && (
                <span className='error'>This field is required</span>
              )}
            </div>
            <div>
              <label>Address</label>
              <Controller
                control={control}
                name='text'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <textarea
                   
                    className='input'
                    onChange={onChange}
                  />
                )}
              />
              {errors.email && (
                <span className='error'>This field is required</span>
              )}
            </div>
            <div>
              <Button>Save Changes</Button>
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
            <div className='btn'>
              <Button className='remove'>Remove Account</Button>
            </div>
          </div>
        </form>
      </Row>
    </SettingStyled>
  );
};

export default VendorSettings;
