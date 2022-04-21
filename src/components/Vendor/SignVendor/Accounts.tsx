import React from 'react';
import { Button, Card, Col, Input, Row, Select } from 'antd';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { SignStyled, LogoHolders, FormGroup, Layout } from './SignStyled';
import { ArrowForward } from '@material-ui/icons';
const Accounts = () => {
  const { Option } = Select;
  return (
    <div>
      <SignStyled style={{ marginTop: '20px' }}>
        <Card>
          <form autoComplete='off'>
            <Row gutter={24}>
              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>Account Number</label>
                  <Input size='large' type={'number'} name='newemail' />
                </FormGroup>
              </Col>
              <Col xs={24} xl={24} lg={24}></Col>
            </Row>
            <Row>
              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>BANK</label>

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
                <FormGroup>
                  <label>Payment Frequency</label>

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
                <FormGroup>
                  <label>Verify Account Name</label>
                  <Input name='newpass' size='large' />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={24} xl={24} lg={24}>
                <Button
                  style={{ background: 'var(--primary-color)' }}
                  size='large'
                  block>
                  NEXT
                </Button>
              </Col>
            </Row>
          </form>
        </Card>
      </SignStyled>
    </div>
  );
};

export default Accounts;
