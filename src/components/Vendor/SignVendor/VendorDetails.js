import { Edit } from '@material-ui/icons';
import { Button, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { VendorStyle, LogoHolders } from './SignStyled';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/Vendor/vendorAuthSlice';
const VendorDetails = () => {
  const { isLoading, isError, message } = useSelector(
    (state) => state.vendorAuth
  );
  const [sellerInfo, setSellerInfo] = useState('');
  const [bussinessInfo, setBussinessInfo] = useState('');
  const [accountInfo, setAccountInfo] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    const sellerInfo = JSON.parse(localStorage.getItem('seller'));
    setSellerInfo(sellerInfo);
    const bussinessInfo = JSON.parse(localStorage.getItem('bussiness'));
    setBussinessInfo(bussinessInfo);
    const accountInfo = JSON.parse(localStorage.getItem('account'));
    setAccountInfo(accountInfo);
  }, []);
  const data = {
    sellerDetails: sellerInfo,
    bussinessDetails: bussinessInfo,
    paymentDetails: accountInfo,
  };
  const { sellerDetails, bussinessDetails, paymentDetails } = data;
  const RegisterVendor = async () => {
    const res = await axios.post(`${API_URL}/vendor/register`, data);
    dispatch(register(data));
  };
  return (
    <UserWebLayout webtitle='Vendor Details'>
      <LogoHolders>
        <div className='img'>
          <img src='/logo2.png' alt='Log' />
        </div>
      </LogoHolders>
      <VendorStyle>
        <h1>SUMMARY</h1>
        <div className='vendor'>
          <div>
            <h1>Seller Details</h1>
            <div className='info'>
              <div>
                <h1>FULL NAME</h1>
                <p>{sellerInfo.fullName}</p>
                <hr></hr>
              </div>
              <div>
                <h1>Phone Number</h1>
                <p>{sellerInfo.phoneNumber}</p>
              </div>
              <div>
                <h1>Email Address</h1>
                <p>{sellerInfo.emailAddress}</p>
                <hr></hr>
              </div>
              <div>
                <h1>Password</h1>
                <p>{sellerInfo.password}</p>
                <hr></hr>
                <Link href='/vendor/seller'>
                  <a>
                    <Edit /> Edit
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h1>Business Details</h1>
            <div className='info'>
              <div>
                <h1>Store Name</h1>
                <p>{bussinessInfo.name}</p>
                <hr></hr>
              </div>
              <div>
                <h1>Bussiness Type</h1>
                <p>{bussinessInfo.type}</p>
                <hr></hr>
              </div>
              <div>
                <h1>CAC Regisrtation Number</h1>
                <p>{bussinessInfo.cacNumber}</p>
                <hr></hr>
              </div>
              <div>
                <h1>State</h1>
                <p>{bussinessInfo.state}</p>
                <hr></hr>
              </div>
              <div>
                <h1>Address</h1>
                <p>{bussinessInfo.address}</p>
                <Link href='/vendor/bussiness'>
                  <a>
                    <Edit /> Edit
                  </a>
                </Link>
                <hr></hr>
              </div>
            </div>
          </div>
          <div>
            <h1>Personal Details</h1>
            <div className='info'>
              <div>
                <h1>Account Number</h1>
                <p>{accountInfo.accountNumber}</p>
                <hr></hr>
              </div>
              <div>
                <h1>AccountName</h1>
                <p>{accountInfo.accountName}</p>
                <hr></hr>
              </div>
              <div>
                <h1>Bank</h1>
                <p>{accountInfo.bank}</p>
                <hr></hr>
              </div>
              <div>
                <h1>Payout Frequency</h1>
                <p>{accountInfo.payoutFrequency}</p>
                <Link href='/vendor/account'>
                  <a>
                    <Edit /> Edit
                  </a>
                </Link>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
        <div className='center'>
          <Row>
            <Col xs={24} xl={24} lg={24}>
              <Button
                size='large'
                htmlType='submit'
                onClick={RegisterVendor}
                className='button'
                block>
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
