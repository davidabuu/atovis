import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Card, Col, Input, Row, Select } from 'antd';
import { LogoHolders } from './SignStyled';
import { SignStyled, FormGroup } from './SignStyled';
import { paymentRegister } from '../../../redux/Vendor/vendorInfoSlice';
import { useDispatch } from 'react-redux';
import router from 'next/router';
import { useState } from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
const PaymentAccount = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const onSubmit = (record) => {
    setLoading(true);
    dispatch(paymentRegister(record));
    router.push('/vendor/vendor-details');
  };
  return (
    <UserWebLayout webtitle='Bussiness Info'>
      <LogoHolders>
        <div className='img'>
          <img src='/logo2.png' alt='Log' />
        </div>
      </LogoHolders>
      <SignStyled style={{ marginTop: '20px' }}>
        <Card>
          <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>Account Name</label>
                  <Controller
                    control={control}
                    name='accountName'
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Input
                        size='large'
                        type='text'
                        onChange={onChange}
                        minLength={'8'}
                      />
                    )}
                  />
                  {errors.accountName && (
                    <span className='error'>This field is required</span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>Account Number</label>
                  <Controller
                    control={control}
                    name='accountNumber'
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Input size='large' type='text' onChange={onChange} />
                    )}
                  />
                  {errors.accountNumber && (
                    <span className='error'>This field is required</span>
                  )}
                </FormGroup>
              </Col>

              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>Bank</label>
                  <Controller
                    control={control}
                    name='bank'
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Input size='large' type='text' onChange={onChange} />
                    )}
                  />
                  {errors.bank && (
                    <span className='error'>This field is required</span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>Payout Frequency</label>
                  <Controller
                    control={control}
                    name='payoutFrequency'
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Input size='large' type='number' onChange={onChange} />
                    )}
                  />
                  {errors.payoutFrequency && (
                    <span className='error'>This field is required</span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={24} xl={24} lg={24}>
                <Button
                  size='large'
                  htmlType='submit'
                  className='vendor-btn'
                  loading={loading}
                  block>
                  {loading ? 'Authenitcation...' : 'NEXT'}
                </Button>
              </Col>
            </Row>
          </form>
        </Card>
      </SignStyled>
    </UserWebLayout>
  );
};

export default PaymentAccount;
