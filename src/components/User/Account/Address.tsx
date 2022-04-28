import { Button, Card, Col, Input, Row } from 'antd';
import React from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { SignStyled, LogoHolder, FormGroup } from '../../Vendor/SignVendor/SignStyled';
import TextArea from 'antd/lib/input/TextArea';
const Address = () => {
  return (
    <div>
      <UserWebLayout webtitle={'Address Info'}>
        <LogoHolder>
          <div className='img'>
            <img src='/logo2.png' alt='Log' />
          </div>
        </LogoHolder>
        <SignStyled style={{ marginTop: '20px' }}>
          <Card>
            <form autoComplete='off'>
              <Row gutter={24}>
                <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                    <label>Country</label>
                    <Input size='large' name='newemail' />
                  </FormGroup>
                </Col>
                <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                    <label>State</label>
                    <Input size='large' name='newemail' />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                    <label>City</label>
                    <Input size='large' name='newemail' />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                    <label>Street Address</label>
                  <TextArea/>
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

export default Address;
