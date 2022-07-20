import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Card, Col, Input, Row, Select } from 'antd';
import { LogoHolders } from './SignStyled';
import { SignStyled, FormGroup } from './SignStyled';
import Navigation from '../Navigation';
import { businessRegister } from '../../../redux/Vendor/vendorInfoSlice';
import { useDispatch } from 'react-redux';
import router from 'next/router';
import { useState } from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
const Bussiness = () => {
  const { Option } = Select;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const onSubmit = (record) => {
    setLoading(true);
    dispatch(businessRegister(record));
    router.push('/vendor/vendor-details');
  };
  return (
    <UserWebLayout webtitl='Bussiness Info'>
      <SignStyled style={{ marginTop: '20px' }}>
        <div className='img'>
          <img src='/logo2.png' alt='Log' />
        </div>
        <div className='card-div'>
          <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <Navigation />
          <h2>BUSSINESS NAME</h2>
            <div>
              <label>Store Name</label>
              <Controller
                control={control}
                name='name'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input size='large' type='text' onChange={onChange} />
                )}
              />
              {errors.name && (
                <span className='error'>This field is required</span>
              )}
            </div>

            <div>
              <label>Business Type</label>
              <Controller
                control={control}
                name='type'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <select id='select' onChange={onChange}>
                    <option value='typ1' className='option'>ABU CODES</option>
                    <option value='typ2'>ABU CODES</option>
                  </select>
                )}
              />
              {errors.type && (
                <span className='error'>This field is required</span>
              )}
            </div>

            <div>
              <label>CAC Registration Number</label>
              <Controller
                control={control}
                name='cacNumber'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input
                    size='large'
                    type='text'
                    minLength={5}
                    onChange={onChange}
                   
                  />
                )}
              />
              {errors.cacNumber && (
                <span className='error'>This field is required</span>
              )}
            </div>
            <div>
              <label>BUSINESS STATE</label>
              <Controller
                control={control}
                name='state'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input
                    size='large'
                    type='text'
                
                    onChange={onChange}
                   
                  />
                )}
              />
              {errors.state && (
                <span className='error'>This field is required</span>
              )}
            </div>
            <div>
              <label>LGA</label>
              <Controller
                control={control}
                name='lga'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input
                    size='large'
                    type='text'
                
                    onChange={onChange}
                   
                  />
                )}
              />
              {errors.lga && (
                <span className='error'>This field is required</span>
              )}
            </div>
            <div>
                <label>Street & House No</label>
                <br></br>
                <Controller
                  control={control}
                  name='address'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <textarea size='large' type='text' onChange={onChange} />
                  )}
                />
                {errors.address && (
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

export default Bussiness;
