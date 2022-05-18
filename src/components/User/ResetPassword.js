import { Button, Card, Col, Input, notification, Row } from 'antd';
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
const ResetPassword = () => {
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
  const UserPasswordReset = (record) => {
    setLoading(isLoading);
    const { password, confirmPassword } = record;
    console.log(password, confirmPassword);
    if (password !== confirmPassword) {
      notification.error({
        message: 'Password Error',
        description: 'Password do not match',
        duration: 1000,
      });
    } else {
      setLoading(true);
      dispatch(register(record));
      if (isSuccess) {
        notification.success({
            message: 'Success',
            description: 'Password reset was a success',
            duration: 1000,
          });
      }
    }
  };
  return (
    <div>
      <UserWebLayout webtitle={'Reset Password'}>
        <LogoHolder>
          <div className='img'>
            <img src='/logo2.png' alt='Log' />
          </div>
        </LogoHolder>
        <SignStyled style={{ marginTop: '20px' }}>
          <Card>
            <form autoComplete='off' onSubmit={handleSubmit(UserPasswordReset)}>
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
                <Col xs={24} xl={24} lg={24}>
                  <FormGroup>
                    <label>Confirm Password</label>
                    <Controller
                      control={control}
                      name='confirmPassword'
                      rules={{ required: true }}
                      render={({ field: { onChange } }) => (
                        <Input.Password
                          size='large'
                          type='password'
                          onChange={onChange}
                        />
                      )}
                    />
                    {errors.confirmPassword && (
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
                      {loading ? 'Authenticating...' : 'ENTER NEW PASSWORD'}
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

export default ResetPassword;
