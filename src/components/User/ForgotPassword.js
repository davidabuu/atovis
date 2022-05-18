import { Button, Card, Col, Input, notification, Row } from 'antd';
import router from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword, reset } from '../../redux/User/forgetPassowordSlice';
import {
  FormGroup,
  LogoHolder,
  SignStyled,
} from '../Vendor/SignVendor/SignStyled';
import UserWebLayout from '../WebLayout/UserWebLayout';
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const { isError, isLoading, message, isSuccess } = useSelector(
    (state) => state.forgotPass
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
  }, [isError, dispatch, message]);
  const UserForgotPassword = (record) => {
    setLoading(isLoading);
    dispatch(forgotPassword(record));
    if (isSuccess) {
      notification.success({
        message: ' Success',
        description: 'Pls kindly check your mail',
        duration: 1000,
      });
      router.push('/user/reset-password');
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
            <form
              autoComplete='off'
              onSubmit={handleSubmit(UserForgotPassword)}>
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
                  <div className='center'>
                    <Button
                      loading={loading}
                      className='button'
                      htmlType='submit'>
                      {loading ? 'Authenticating...' : 'Please Enter Your Mail'}
                    </Button>
                  </div>
                </Col>
              </Row>
            </form>
          </Card>
        </SignStyled>
      </UserWebLayout>
    </div>
  );
};

export default ForgotPassword;
