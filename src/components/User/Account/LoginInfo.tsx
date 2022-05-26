import { Card, Col, Input, Button, Row } from 'antd';
import React from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { FormGroup,  SignStyled } from '../../Vendor/SignVendor/SignStyled';
const LoginInfo = () => {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <UserWebLayout webtitle='Sign In'>
      <div data-aos='zoom-in'>
        <SignStyled style={{ marginTop: '20px' }}>
          <Card>
            <form autoComplete='off'>
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
                    <Button
                      className='button'
                      htmlType='submit'>
                      SAVE INFO
                    </Button>
                  </div>
                </Col>
              </Row>
            </form>
          </Card>
        </SignStyled>
      </div>
    </UserWebLayout>
  );
};

export default LoginInfo;
