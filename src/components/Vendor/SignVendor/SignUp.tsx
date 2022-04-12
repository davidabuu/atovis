import { Button, Card, Col, Input, Row } from 'antd';
import React from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { SignStyled, LogoHolder, FormGroup } from './SignStyled';
const SignUp = () => {
  return (
    <div>
      <UserWebLayout webtitle={'Vendor Sign In'}>
        <LogoHolder>
          <img src='/logo2.png' alt='Log' />
        </LogoHolder>

        <SignStyled style={{ marginTop: '20px' }}>
          <Card>
            <form autoComplete='off'>
              <Row gutter={24}>
                <Col xs={24} xl={24} lg={24}>
                  <FormGroup>
                    <label>First Name</label>
                    <Input size='large' />
                  </FormGroup>
                </Col>
                <Col xs={24} xl={24} lg={24}>
                  <FormGroup>
                    <label>Email Address</label>
                    <Input size='large' name='newemail' />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={24} xl={24} lg={24}>
                  <FormGroup>
                    <label>Password</label>
                    <Input.Password name='newpass' size='large' />
                  </FormGroup>
                </Col>
              </Row>
            </form>
          </Card>
        </SignStyled>

      </UserWebLayout>
    </div>
  );
};

export default SignUp;
