import { Card, Col, Input, Button, Select, Row, notification } from 'antd';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { APP_BASE_URL, User } from '../utils/ApiList';
import {
  FormGroup,
  LogoHolder,
  SignStyled,
} from '../Vendor/SignVendor/SignStyled';
import UserWebLayout from '../WebLayout/UserWebLayout';
const UserSignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const { Option } = Select;
  const LoginUser = async (data) => {
    console.log(data)
    const { password, confirmPassword } = data;
    if (password === confirmPassword) {
      notification.error({
        message: 'Password Error',
        description: 'Password do not match',
        duration: 20,
      });
      setloading(false);
    }
    try {
      setLoading(true);
      const res = await axios.post(`${APP_BASE_URL}${User.register}`, data);

      const { data } = res;
      console.log(data);
      setLoading(false);
    } catch (error) {
        setLoading(false);
      console.log('Error');
    }
  };
  return (
    <UserWebLayout webtitle='Sign Up'>
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
                  <label>First Name</label>
                  <Controller
                    control={control}
                    name='firstName'
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Input size='large' type='text' onChange={onChange} />
                    )}
                  />
                  {errors.firstName && (
                    <span className='error'>This field is required</span>
                  )}
                </FormGroup>
              </Col>
              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>Last Name</label>
                  <Controller
                    control={control}
                    name='lastName'
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Input size='large' type='text' onChange={onChange} />
                    )}
                  />
                  {errors.LastName && (
                    <span className='error'>This field is required</span>
                  )}
                </FormGroup>
              </Col>
            </Row>
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
                <FormGroup>
                  <label>Gender</label>
                  <Controller
                    control={control}
                    name='gender'
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Select
                        onChange={onChange}
                        size='large'
                        style={{ width: '100%' }}>
                        <Option value='Male'>Male</Option>
                        <Option value='Female'>Female</Option>
                      </Select>
                    )}
                  />
                  {errors.gender && (
                    <span className='error'>Gender is required</span>
                  )}
                </FormGroup>
              </Col>
            </Row>
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
                    name='eepassword'
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Input.Password
                        size='large'
                        type='password'
                        onChange={onChange}
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
                <div className='center'>
                  <Button loading={loading} className='button' htmlType='submit'>
                    {loading ? 'Authenticating...' : 'Sign Up'}
                  </Button>
                </div>
              </Col>
            </Row>
          </form>
          <p className='center'>OR</p>
          <div className='center'>
            <Button className='buttons'>SIGN WITH GOOGLE</Button>
          </div>
          <Row>
            <Col xs={24} xl={24} lg={24}>
              <p className='dont'>
                Already have an account <a>Sign In</a>
              </p>
            </Col>
          </Row>
        </Card>
      </SignStyled>
    </UserWebLayout>
  );
};

export default UserSignUp;