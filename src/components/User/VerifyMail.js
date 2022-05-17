import { Button, Card, Col, Input, notification, Row } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { verifyMail, reset } from '../../redux/User/verifySlice';
import {
  FormGroup,
  LogoHolder,
  SignStyled,
} from '../Vendor/SignVendor/SignStyled';
import UserWebLayout from '../WebLayout/UserWebLayout';
import router from 'next/router';
const VerifyMail = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const { isError, isLoading, message, isSuccess } = useSelector(
    (state) => state.verify
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
  }, [isError, dispatch]);
  const Verify = (code) => {
    setLoading(isLoading);
    dispatch(verifyMail(code));
    if (isSuccess) {
      router.push('/user/landing-page');
    }
  };
  return (
    <div>
      <UserWebLayout webtitle={'Verify Mail'}>
        <LogoHolder>
          <div className='img'>
            <img src='/logo2.png' alt='Log' />
          </div>
        </LogoHolder>
        <SignStyled style={{ marginTop: '20px' }}>
          <Card>
            <form autoComplete='off' onSubmit={handleSubmit(Verify)}>
              <Row gutter={24}>
                <Col xs={24} xl={24} lg={24}>
                  <FormGroup>
                    <label>ENTER CODE</label>
                    <Controller
                      control={control}
                      name='number'
                      rules={{ required: true }}
                      render={({ field: { onChange } }) => (
                        <Input size='large' type='number' onChange={onChange} />
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
                      {loading ? 'Authenticating...' : 'ENTER CODE'}
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

export default VerifyMail;
