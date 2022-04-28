import { Card, Col, Input, Button, Select, Row } from 'antd';
import React from 'react';
import {
  FormGroup,
  LogoHolder,
  SignStyled,
} from '../../Vendor/SignVendor/SignStyled';
import UserWebLayout from '../../WebLayout/UserWebLayout';
const MyBio = () => {
  const { Option } = Select;
  return (
    <UserWebLayout webtitle='My Bio'>
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
                  <label>First Name</label>
                  <Input size='large' name='newemail' />
                </FormGroup>
              </Col>
              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>Last Name</label>
                  <Input size='large' name='newemail' />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>Gender</label>

                  <Select
                    className='select'
                    defaultValue={'Male or Female'}
                    style={{ width: '400px' }}>
                    <Option>Male</Option>
                    <Option>Female</Option>
                  </Select>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>AGE</label>

                  <Select className='select' style={{ width: '400px' }}>
                    <Option>Hello</Option>
                    <Option>Hello</Option>
                    <Option>Hello</Option>
                    <Option>Hello</Option>
                  </Select>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={24} xl={24} lg={24}>
                <div className='center'>
                  <Button className='button'>SAVE BIO</Button>
                </div>
              </Col>
            </Row>
          </form>
        </Card>
      </SignStyled>
    </UserWebLayout>
  );
};

export default MyBio;
