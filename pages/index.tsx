import { Col, Input, Row } from 'antd';
import React from 'react';
import Header from '../src/components/Header/Header';

const index = () => {
  return (
    <div>
      <Header />
      <div className='container'>
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
            <Col xs={24} xl={8} lg={8}>
              <label>Password</label>
              <Input.Password name="newpass" size='large' />
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default index;
