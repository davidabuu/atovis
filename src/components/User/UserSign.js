import { Button, Card, Col, Input, notification, Row } from 'antd';
import router from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../redux/User/authSlice';
import {
  FormGroup,
  LogoHolder,
  SignStyled,
} from '../Vendor/SignVendor/SignStyled';
import UserWebLayout from '../WebLayout/UserWebLayout';
import router from 'next/router'
import Link from 'next/link'
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
  const { user,  isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      setLoading(false)
      notification.error({
        message: ' Error',
        description: message,
        duration: 1000,
      });
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);
  const LoginUser = async (
    data
  ) => {
    if(isSuccess){
      router.push('/user/landing-page')
    }else{
      setLoading(true);
      dispatch(login(record));
      router.push('/user/landing-page')
    }
  };
  return (
    <div>
      <UserWebLayout webtitle={'Sign In'}>
        <LogoHolder>
          <div className='img'>
            <img src='/logo2.png' alt='Log' />
          </div>
        </LogoHolder>
        <SignStyled style={{ marginTop: '20px' }}>
          <Card>
            <form autoComplete='off' onSubmit={handleSubmit(LoginUser)}>
              <Row gutter={24}>
                <Col xs={24} xl={24} lg={24}>
                  <FormGroup>
                    <label>Email Address</label>
                    <Controller
                      control={control}
                      name="email"
                      rules={{ required: true }}
                      render={({ field: { onChange } }) => (
                        <Input
                          size='large'
                          type='email'
                          onChange={onChange}
                        />
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
                    <Input
                      type={'password'}
                      size='large'
                    />
                    {errors.password && (
                      <span className='error'>This field is required</span>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col xs={24} xl={24} lg={24}>
                  <div className='checkbox'>
                    <div>
                      <input id='tandc' type='checkbox' />
                      <label htmlFor='tandc' className='terms'>
                        Remember me ?
                      </label>
                    </div>
                    <a>Forgot Password</a>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={24} xl={24} lg={24}>
                <div className='center'>
             <Button className='button' loading={loading}>{loading ? 'Authenticating...' : 'LOGIN'}</Button>
             </div>
                </Col>
              </Row>
              <p className='center'>OR</p>
              <Row>
                <Col xs={24} xl={24} lg={24}>
                <div className='center'>
             <Button className='buttons'>SIGN IN WITH GOOGLE</Button>
             </div>
                </Col>
              </Row>
              <Row>
                <Col xs={24} xl={24} lg={24}>
                  <p className='dont'>
                    Do not have an account <Link href='/user/sign-up'>
                    <a>Sign Up</a>
                    </Link>
                  </p>
                </Col>
              </Row>
            </form>
          </Card>
        </SignStyled>
      </UserWebLayout>
    </div>
  );
};

export default UserLogin;
