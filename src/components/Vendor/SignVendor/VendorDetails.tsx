import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Card, Col, Input, Row, Select } from 'antd';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { SignStyled, LogoHolders, FormGroup, Layout } from './SignStyled';
import { ArrowForward } from '@material-ui/icons';
const VendorDetails = () => {
  const { Option } = Select;
  const [seller, showSeller] = useState(false);
  const [bussiness, showBussiness] = useState(false);
  const [accounts, showAccounts] = useState(false);
  useEffect(() => {
    showSeller(true);
  }, []);
  const changeCategory = (tab: string) => {
    if (tab === 'seller') {
      showSeller(true);
      showBussiness(false);
      showAccounts(false);
    } else if (tab === 'bussiness') {
      showBussiness(true);
      showSeller(false);
      showAccounts(false);
    } else if (tab === 'accounts') {
      showAccounts(true);
      showSeller(false);
      showBussiness(false);
      console.log(accounts);
    }
  };
  return (
    <UserWebLayout webtitle={'Vendor Details'}>
      <div>
        <LogoHolders>
          <div className='img'>
            <img src='/logo2.png' alt='Log' />
          </div>
        </LogoHolders>
        {seller ? (
          <>
            <Layout>
              <h1>Seller Details</h1>
              <ul>
                <a>
                  <li
                    style={{ color: 'var(--primary-color)' }}
                    onClick={() => changeCategory('seller')}
                    onKeyDown={() => changeCategory('seller')}>
                    Seller Details
                  </li>{' '}
                  <ArrowForward />
                </a>
                <a>
                  <li
                    onClick={() => changeCategory('bussiness')}
                    onKeyDown={() => changeCategory('bussiness')}>
                    Bussiness Details
                  </li>{' '}
                  <ArrowForward />
                </a>
                <a>
                  <li
                    onClick={() => changeCategory('accounts')}
                    onKeyDown={() => changeCategory('accounts')}>
                    Payment Details
                  </li>{' '}
                  <ArrowForward />
                </a>
                <a>
                  <li>Summary</li> <ArrowForward />
                </a>
              </ul>
            </Layout>
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
          </>
        ) : (
          ''
        )}
      </div>
      {bussiness ? (
        <>
          <Layout>
            <h1>Bussiness Details</h1>
            <ul>
              <a>
                <li
                  onClick={() => changeCategory('seller')}
                  onKeyDown={() => changeCategory('seller')}>
                  Seller Details
                </li>{' '}
                <ArrowForward />
              </a>
              <a>
                <li
                  style={{ color: 'var(--primary-color)' }}
                  onClick={() => changeCategory('bussiness')}
                  onKeyDown={() => changeCategory('bussiness')}>
                  Bussiness Details
                </li>{' '}
                <ArrowForward />
              </a>
              <a>
                <li
                  onClick={() => changeCategory('accounts')}
                  onKeyDown={() => changeCategory('accounts')}>
                  Payment Details
                </li>{' '}
                <ArrowForward />
              </a>
              <a>
                <li>Summary</li> <ArrowForward />
              </a>
            </ul>
          </Layout>
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
        </>
      ) : (
        ''
      )}
      {accounts ? (
        <>
          <Layout>
            <h1>Account Details</h1>
            <ul>
              <a>
                <li
                  onClick={() => changeCategory('seller')}
                  onKeyDown={() => changeCategory('seller')}>
                  Seller Details
                </li>{' '}
                <ArrowForward />
              </a>
              <a>
                <li
                  onClick={() => changeCategory('bussiness')}
                  onKeyDown={() => changeCategory('bussiness')}>
                  Bussiness Details
                </li>{' '}
                <ArrowForward />
              </a>
              <a>
                <li
                  style={{ color: 'var(--primary-color)' }}
                  onClick={() => changeCategory('accounts')}
                  onKeyDown={() => changeCategory('accounts')}>
                  Payment Details
                </li>{' '}
                <ArrowForward className='icon' />
              </a>
              <a>
                <li>Summary</li> <ArrowForward  className='icon'/>
              </a>
            </ul>
          </Layout>
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
        </>
      ) : (
        ''
      )}
    </UserWebLayout>
  );
};

export default VendorDetails;
