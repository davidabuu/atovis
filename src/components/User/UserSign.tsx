import { Button, Card, Col, Input, notification, Row } from 'antd';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormGroup,
  LogoHolder,
  SignStyled,
} from '../Vendor/SignVendor/SignStyled';
import UserWebLayout from '../WebLayout/UserWebLayout';
const UserLogin = () => {
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
      <UserWebLayout webtitle={'Sign In'}>
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
                      type='text'
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
                <div className='center'>
             <Button className='button'>LOGIN</Button>
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

export default UserLogin;
