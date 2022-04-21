import { Button, Card, Col, Input, notification, Row } from 'antd';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Vendors } from '../../utils/ApiList';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { SignStyled, LogoHolder, FormGroup } from './SignStyled';
const Login = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const LoginVendor = async (
    data: any,
    event: { preventDefault: () => void }
  ) => {
    console.log(data);
    console.log('Hello');
    event.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        `${process.env.APP_BASE_URL}${Vendors.loginDetails}`,
        data
      );
      setLoading(false);
      console.log(data);
      setTimeout(() => {
        notification.success({
          message: 'Success',
          description: 'Login Successfully',
          duration: 5,
        });
      }, 1000);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setTimeout(() => {
        notification.error({
          message: 'Error',
          description: 'Not Registered',
          duration: 5,
        });
      }, 1000);
    }
  };
  return (
    <div>
      <UserWebLayout webtitle={'Vendor Sign In'}>
        <LogoHolder>
          <div className='img'>
            <img src='/logo2.png' alt='Log' />
          </div>
        </LogoHolder>
        <SignStyled style={{ marginTop: '20px' }}>
          <Card>
            <form autoComplete='off' onSubmit={handleSubmit(LoginVendor)}>
              <Row gutter={24}>
                <Col xs={24} xl={24} lg={24}>
                  <FormGroup>
                    <label>Email Address</label>
                    <Input
                      size='large'
                      type='email'
                      {...register('email', { required: true })}
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
                      {...register('password', { required: true })}
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
                  <Button
                    style={{ background: 'var(--primary-color)' }}
                    size='large'
                    htmlType='submit'
                    loading={loading}
                    block>
                    LOGIN
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col xs={24} xl={24} lg={24}>
                  <p className='dont'>
                    Don't have an account <a>Sign Up</a>
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

export default Login;
