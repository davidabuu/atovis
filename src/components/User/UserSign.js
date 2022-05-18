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
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);
  const LoginUser = async (record) => {
    console.log(record)
    if (isError) {
      notification.error({
        message: ' Error',
        description: message,
        duration: 1000,
      });
    } else {
      console.log(record)
      setLoading(true);
      dispatch(login(record));
      if (isSuccess) {
        router.push('/user/landing-page');
      }
    }
  };
  return (
    <UserWebLayout webtitle='Sign In'>
      <LogoHolder>
        <div className='img'>
          <img src='/logo2.png' alt='Log' />
        </div>
      </LogoHolder>
      <div data-aos='zoom-in'>
        <SignStyled style={{ marginTop: '20px' }}>
          <Card>
            <form autoComplete='off' onSubmit={handleSubmit(LoginUser)}>
              <Row gutter={24}>
                <Col xs={24} xl={24} lg={24}>
                  <FormGroup>
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
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={24} xl={24} lg={24}>
                  <FormGroup>
                    <label>Password</label>
                    <Controller
                      control={control}
                      name='password'
                      rules={{ required: true }}
                      render={({ field: { onChange } }) => (
                        <Input.Password
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
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                <Link href='/user/forgot-password'>
                <a>Forgot Password</a>
                </Link>
                </Col>
              </Row>
              <Row>
                <Col xs={24} xl={24} lg={24}>
                  <div className='center'>
                    <Button
                      loading={loading}
                      className='button'
                      htmlType='submit'>
                      {loading ? 'Authenticating...' : 'Sign In'}
                    </Button>
                  </div>
                </Col>
              </Row>
            </form>
            <p className='center'>OR</p>
            <div className='center'>
              <Button className='buttons'>SIGN IN WITH GOOGLE</Button>
            </div>
            <Row>
              <Col xs={24} xl={24} lg={24}>
                <p className='dont'>
                  Do not have an account{' '}
                  <Link href='/user/sign-up'>
                    <a>Sign Up</a>
                  </Link>
                </p>
              </Col>
            </Row>
          </Card>
        </SignStyled>
      </div>
    </UserWebLayout>
  );
};

export default UserLogin;
