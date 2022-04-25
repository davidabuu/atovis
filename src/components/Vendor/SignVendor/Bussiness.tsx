import React from 'react';
import { Button, Card, Col, Input, Row, Select } from 'antd';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { SignStyled, LogoHolders, FormGroup, Layout } from './SignStyled';
import { ArrowForward } from '@material-ui/icons';
const Bussiness = () => {
  const { Option } = Select;
  return (
    <div>
      <SignStyled style={{ marginTop: '20px' }}>
        <Card>
          <form autoComplete='off'>
            <Row gutter={24}>
              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>Store Name</label>
                  <Input size='large' name='newemail' />
                </FormGroup>
              </Col>
              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>Bussiness Type</label>

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
                  <label>CAC REGISTTRATION NUMBER</label>
                  <Input size='large' name='newemail' />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                  <label>STATE</label>

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
                  <label>LGA</label>

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
                <Input.TextArea
                  size='large'
                  showCount
                  maxLength={250}
                  placeholder='Enter Product Description'
                />
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

export default Bussiness;