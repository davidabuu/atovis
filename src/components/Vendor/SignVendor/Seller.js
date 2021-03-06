import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input, notification, Row } from 'antd';

import { SignStyled, FormGroup } from './SignStyled';
import { sellerRegister } from '../../../redux/Vendor/vendorInfoSlice';
import { useDispatch } from 'react-redux';
import router from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import Navigation from '../Navigation';
const Seller = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const onSubmit = (record) => {
    const { password, confirmPassword } = record;
    if (password !== confirmPassword) {
      notification.error({
        message: 'Password Error',
        description: 'Password do not match',
        duration: 1000,
      });
    } else {
      setLoading(true);
      dispatch(sellerRegister(record));
      router.push('/vendor/bussiness');
    }
  };
  return (
    <UserWebLayout webtitle='Seller Info'>
      <SignStyled style={{ marginTop: '20px' }}>
        <div className='img'>
          <img src='/logo2.png' alt='Log' />
        </div>
        <div>
          <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <Navigation />
            <h2>SELLER</h2>
            <div className='card-div'>
              <label>Full Name</label>
              <Controller
                control={control}
                name='fullName'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input size='large' type='text' onChange={onChange} />
                )}
              />
              {errors.fullName && (
                <span className='error'>This field is required</span>
              )}
            </div>
            <div>
              <label>Email Address</label>
              <Controller
                control={control}
                name='email'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <Input size='large' type='email' onChange={onChange} />
                )}
              />
              {errors.email && (
                <span className='error'>This field is required</span>
              )}
            </div>

            <div>
              <label>Phone Number</label>
              <Controller
                control={control}
                name='phoneNumber'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input
                    size='large'
                    type='text'
                    onChange={onChange}
                    minLength={'8'}
                  />
                )}
              />
              {errors.phoneNumber && (
                <span className='error'>This field is required</span>
              )}
            </div>

            <div>
              <label>Password</label>
              <Controller
                control={control}
                name='password'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input
                    size='large'
                    type='password'
                    onChange={onChange}
                    minLength={'8'}
                  />
                )}
              />
              {errors.password && (
                <span className='error'>This field is required</span>
              )}
            </div>

            <div>
              <label>Confirm Password</label>
              <Controller
                control={control}
                name='confirmPassword'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input size='large' type='password' onChange={onChange} />
                )}
              />
              {errors.confirmPassword && (
                <span className='error'>This field is required</span>
              )}
            </div>

            <br></br>
            <div className='btn'>
              <Button loading={loading} htmlType='submit' className='btn-sign'>
                {loading ? 'Authenticating...' : 'NEXT'}
              </Button>
            </div>
            <div>
              <p>
                Dont't have an account ?{' '}
                <Link href='/vendor/sign-up'>
                  <a className='p'>Sign up</a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </SignStyled>
    </UserWebLayout>
  );
};

export default Seller;
