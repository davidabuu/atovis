import { Card, Col, Input, Button, Row, notification } from 'antd';
import Link from 'next/link';
import React from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import router from 'next/router';
import {
  SignStyled,
} from '../Vendor/SignVendor/SignStyled';
import UserWebLayout from '../WebLayout/UserWebLayout';
import { adminLogin } from '../../redux/adminSlice';
const UserLogin = () => {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.adminSlice
  );
  useEffect(() => {
    if (isError) {
      setLoading(false);
      notification.error({
        message: ' Error',
        description: message,
        duration: 1000,
      });
    } else if (isSuccess) {
      router.push('/user/landing-page');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);
  const AdminLogin = async (record) => {
    if (isError) {
      notification.error({
        message: ' Error',
        description: message,
        duration: 1000,
      });
    } else {
      setLoading(true);
      dispatch(adminLogin(record));
    }
  };
  return (
    <UserWebLayout webtitle='Admin Sign In'>
      <div data-aos='zoom-in'>
        <SignStyled style={{ marginTop: '20px' }}>
          <div className='card-div'>
            <form autoComplete='off' onSubmit={handleSubmit(AdminLogin)}>
              <div>
                <label>Email Address</label>
                <br></br>
                <Controller
                  control={control}
                  name='email'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input size='large' type='email' onChange={onChange} />
                  )}
                />
                {errors.email && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div>
                <label>Password</label>
                <br></br>
                <Controller
                  control={control}
                  name='password'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input
                      size='large'
                      type='password'
                      onChange={onChange}
                    
                    />
                  )}
                />
                {errors.password && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <br></br>
              <div className='btn'>
                <Button
                  loading={loading}
                  htmlType='submit'
                  className='btn-sign'>
                  {loading ? 'Authenticating...' : 'Sign In'}
                </Button>
              </div>
            </form>
          </div>
        </SignStyled
        >
      </div>
    </UserWebLayout>
  );
};

export default UserLogin;
