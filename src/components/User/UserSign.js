import { Card, Col, Input, Button, Row, notification } from 'antd';
import Link from 'next/link';
import React from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../../redux/User/authSlice';
import router from 'next/router';
import {
  FormGroup,
  LogoHolder,
  SignStyled,
} from '../Vendor/SignVendor/SignStyled';
import UserWebLayout from '../WebLayout/UserWebLayout';
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
    (state) => state.auth
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
  const LoginUser = async (record) => {
    if (isError) {
      notification.error({
        message: ' Error',
        description: message,
        duration: 1000,
      });
    } else {
      setLoading(true);
      dispatch(login(record));
    }
  };
  return (
    <UserWebLayout webtitle='Sign In'>
      <div data-aos='zoom-in'>
        <SignStyled style={{ marginTop: '20px' }}>
          <div className='card-div'>
            <form autoComplete='off' onSubmit={handleSubmit(LoginUser)}>
              <h2>Sign In</h2>
              <p  className='p'>
                Sign-in to get access to great shopping deals from trusted
                vendors
              </p>
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
                      minLength={'8'}
                    />
                  )}
                />
                {errors.password && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <br></br>
              <div className='forgot'>
                <Link href='/user/forgot-password'>
                  <a className='forgot'>Forgot Password ?</a>
                </Link>
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
              <h3>OR</h3>
              <div className='btn-google-sign'>
                <img src='/google.png' alt='Google'/>
                <p>Sign in with Google</p>
              </div>
              <div>
                <p>
                  Dont't have an account ? <a className='p'>Sign up</a>
                </p>
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
