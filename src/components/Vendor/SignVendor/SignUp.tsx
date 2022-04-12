import { Button, Col, Input, Row } from 'antd';
import React from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { SignStyled } from './SignStyled';
const SignUp = () => {
  return (
    <div style={{ background: '#fff', height: '100vh' }}>
      <UserWebLayout webtitle={'Vendor Sign In'}>
        <SignStyled style={{ marginTop: '20px' }}>
          <img src='/logo2.png' alt='Log' />
          <form autoComplete='off'>
            <Row gutter={24}>
              <Col xs={24} xl={8} lg={8}>
                <label>First Name</label>
                <Input size='large' />
              </Col>
              <Col xs={24} xl={8} lg={8}>
                <label>Email Address</label>
                <Input size='large' name='newemail' />
              </Col>
            </Row>
            <Row>
              <Col xs={24} xl={8} lg={8}>
                <label>Password</label>
                <Input.Password name='newpass' size='large' />
              </Col>
            </Row>
          </form>
        </SignStyled>
      </UserWebLayout>
    </div>
  );
};

export default SignUp;
