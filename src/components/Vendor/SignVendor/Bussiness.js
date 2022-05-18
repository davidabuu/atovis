import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Card, Col, Input, Row, Select } from 'antd';
import { LogoHolders } from './SignStyled';
import { SignStyled, FormGroup } from './SignStyled';
import { bussinessRegister } from '../../../redux/Vendor/vendorAuthSlice';
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
    dispatch(bussinessRegister(record));
    router.push('/vendor/payment-info');
  };
  return (
    <UserWebLayout webtitl='Bussiness Info'>
      <LogoHolders>
        <div className='img'>
          <img src='/logo2.png' alt='Log' />
        </div>
      </LogoHolders>
      <SignStyled style={{ marginTop: '20px' }}>
        <Card>
          <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <Row gutter={24}>
              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>Store Name</label>
                  <Controller
                    control={control}
                    name='name'
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Input size='large' type='text' onChange={onChange} />
                    )}
                  />
                  {errors.name && (
                    <span className='error'>This field is required</span>
                  )}
                </FormGroup>
              </Col>

              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>Business Type</label>
                  <Controller
                    control={control}
                    name='type'
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Select
                        onChange={onChange}
                        size='large'
                        style={{ width: '100%' }}>
                        <Option value='typ1'>Type 1</Option>
                        <Option value='typ2'>Type 2</Option>
                      </Select>
                    )}
                  />
                  {errors.type && (
                    <span className='error'>This field is required</span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>CAC Registration Number</label>
                  <Controller
                    control={control}
                    name='cacNumber'
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
                  {errors.cacNumber && (
                    <span className='error'>This field is required</span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>Address</label>
                  <Controller
                    control={control}
                    name='address'
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Input.TextArea
                        size='large'
                        type='text'
                        onChange={onChange}
                        minLength={'8'}
                      />
                    )}
                  />
                  {errors.address && (
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

export default Bussiness;
