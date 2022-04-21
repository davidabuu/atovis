import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Card, Col, Input, Row, Select } from 'antd';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { SignStyled, LogoHolders, FormGroup, Layout } from './SignStyled';
import { ArrowForward } from '@material-ui/icons';
const Seller = () => {
  return (
    <div>
            <SignStyled style={{ marginTop: '20px' }}>
              <Card>
                <form autoComplete='off'>
                  <Row gutter={24}>
                    <Col xs={24} xl={24} lg={24}>
                      <FormGroup>
                        <label>Full Name</label>
                        <Input size='large' name='newemail' />
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
                  <Row>
                    <Col xs={24} xl={24} lg={24}>
                      <FormGroup>
                        <label>Confirm Password</label>
                        <Input.Password name='newpass' size='large' />
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
  )
}

export default Seller;