import { Button, Col, Row } from 'antd';
import React from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { VendorStyle, LogoHolders } from './SignStyled';
const VendorDetails = () => {
  // const { sellerDetails, bussinessDetails, paymentDetails } = useSelector(
  //   (state) => state.vendorDetails
  // );
  return (
    <UserWebLayout webtitle='Vendor Details'>
      <div className='img'>
        <img src='/logo2.png' alt='Log' />
      </div>
      <VendorStyle>
        <h1>SUMMARY</h1>
        <div className='vendor'>
          <div>
            <h1>Seller Details</h1>
            <div className='info'>
              <div>
                <h1>FULL NAME</h1>
                <p>Abu Codes</p>
                <hr></hr>
              </div>
              <div>
                <h1>Phone Number</h1>
                <p>Abu Codes</p>
              </div>
              <div>
                <h1>Email Address</h1>
                <p>Abu Codes</p>
                <hr></hr>
              </div>
            </div>
          </div>
          <div>
            <h1>Business Details</h1>
            <div className='info'>
              <div>
                <h1>Store Name</h1>
                <p>Abu Codes</p>
                <hr></hr>
              </div>
              <div>
                <h1>Bussiness Type</h1>
                <p>Abu Codes</p>
                <hr></hr>
              </div>
              <div>
                <h1>CAC Regisrtation Number</h1>
                <p>Abu Codes</p>
                <hr></hr>
              </div>
              <div>
                <h1>Address</h1>
                <p>Abu Codes</p>
                <hr></hr>
              </div>
            </div>
          </div>
          <div>
            <h1>Personal Details</h1>
            <div className='info'>
              <div>
                <h1>Account Number</h1>
                <p>Abu Codes</p>
                <hr></hr>
              </div>
              <div>
                <h1>Name</h1>
                <p>Abu Codes</p>
                <hr></hr>
              </div>
              <div>
                <h1>Type</h1>
                <p>Abu Codes</p>
                <hr></hr>
              </div>
              <div>
                <h1>Payout Frequency</h1>
                <p>Abu Codes</p>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
        <div className='center'>
          <Row>
            <Col xs={24} xl={24} lg={24}>
              <Button size='large' htmlType='submit' className='button' block>
                REGISTER
              </Button>
            </Col>
          </Row>
        </div>
      </VendorStyle>
    </UserWebLayout>
  );
};

export default VendorDetails;
