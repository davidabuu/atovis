import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Card, Col, Input, Row, Select } from 'antd';
import { LogoHolders } from './SignStyled';
import { SignStyled, FormGroup } from './SignStyled';
import { paymentRegister } from '../../../redux/Vendor/vendorInfoSlice';
import Navigation from '../Navigation';
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
      <SignStyled style={{ marginTop: '20px' }}>
        <div className='img'>
          <img src='/logo2.png' alt='Log' />
        </div>
        <div className='card-div'>
          <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <Navigation/>
            <h2>ACCOUNT NAME</h2>
            <div>
              <label>Account Name</label>
              <Controller
                control={control}
                name='accountName'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input
                    size='large'
                    type='text'
                    onChange={onChange}
                  />
                )}
              />
              {errors.accountName && (
                <span className='error'>This field is required</span>
              )}
            </div>

            <div>
              <label>Account Number</label>
              <Controller
                control={control}
                name='accountNumber'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input size='large' type='text' onChange={onChange} />
                )}
              />
              {errors.accountNumber && (
                <span className='error'>This field is required</span>
              )}
            </div>

            <div>
              <label>Bank</label>
              <Controller
                control={control}
                name='bank'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input size='large' type='text' onChange={onChange} />
                )}
              />
              {errors.bank && (
                <span className='error'>This field is required</span>
              )}
            </div>

            <div>
              <label>Payout Frequency</label>
              <Controller
                control={control}
                name='payoutFrequency'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input size='large' type='number' onChange={onChange} />
                )}
              />
              {errors.payoutFrequency && (
                <span className='error'>This field is required</span>
              )}
            </div>

            <br></br>
            <div className='btn'>
              <Button loading={loading} htmlType='submit' className='btn-sign'>
                {loading ? 'Authenticating...' : 'NEXT'}
              </Button>
            </div>
          </form>
        </div>
      </SignStyled>
    </UserWebLayout>
  );
};

export default PaymentAccount;
