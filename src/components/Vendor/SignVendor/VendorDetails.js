import { Edit } from '@material-ui/icons';
import { Button, Col, notification, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { VendorStyle, LogoHolders } from './SignStyled';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/Vendor/vendorAuthSlice';
const VendorDetails = () => {
  const { isLoading, isError, message } = useSelector(
    (state) => state.vendorAuth
  );
  const [loading, setLoading] = useState(false);
  const { sellerDetails, bussinessDetails, paymentDetails, address } = useSelector(
    (state) => state.vendorDetails
  );
  console.log(address)
  const data = {
    sellerDetails,
    bussinessDetails,
    paymentDetails,
    address
  }
  const registerVendor = async () => {
    try {
      setLoading(true)
      const res = await axios.post(`${process.env.API_URL}/vendor/register`, data);
      if(res.data){
        notification.success({
          message: ' Success',
          description: 'Congratulations, You are now a vendor',
          duration: 1000,
        });
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      notification.error({
        message: ' Error',
        description: error.message,
        duration: 1000,
      });
      setLoading(false);
    }
  };
  return (
    <UserWebLayout webtitle='Vendor Details'>
      <VendorStyle>
        <div className='img'>
          <img src='/logo2.png' alt='Logo' />
        </div>
        <h2 className='summary'>SUMMARY</h2>
        <div className='vendor'>
          <div>
            <h2>Seller Details</h2>
            <div className='info'>
              <div>
                <h2>FULL NAME</h2>
                <p>{sellerDetails.fullName}</p>
              </div>
              <div>
                <h2>Phone Number</h2>
                <p>{sellerDetails.phoneNumber}</p>
              </div>
              <div>
                <h2>Email Address</h2>
                <p>{sellerDetails.emailAddress}</p>
              </div>
              <div>
                <h2>Password</h2>
                <p>{sellerDetails.password}</p>

                <Link href='/vendor/seller'>
                  <a>
                    <Edit /> Edit
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h2>Business Details</h2>
            <div className='info'>
              <div>
                <h2>Store Name</h2>
                <p>{bussinessDetails.name}</p>
              </div>
              <div>
                <h2>Bussiness Type</h2>
                <p>{bussinessDetails.type}</p>
              </div>
              <div>
                <h2>CAC Regisrtation Number</h2>
                <p>{bussinessDetails.cacNumber}</p>
                <Link href='/vendor/account'>
                  <a>
                    <Edit /> Edit
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h2>Personal Details</h2>
            <div className='info'>
              <div>
                <h2>Account Number</h2>
                <p>{paymentDetails.accountNumber}</p>
              </div>
              <div>
                <h2>AccountName</h2>
                <p>{paymentDetails.accountName}</p>
              </div>
              <div>
                <h2>Bank</h2>
                <p>{paymentDetails.bank}</p>
              </div>
              <div>
                <h2>Payout Frequency</h2>
                <p>{paymentDetails.payoutFrequency}</p>
                <Link href='/vendor/account'>
                  <a>
                    <Edit /> Edit
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h2>Address Details</h2>
            <div className='info'>
              <div>
                <h2>Latitude</h2>
                <p>{address.lat}</p>
              </div>
              <div>
                <h2>Longitude</h2>
                
                <p>{address.long}</p>
              </div>
              
              <div>
                <h2>Full Address</h2>
                <p>{address.fullAddress}</p>
                <Link href='/vendor/address'>
                  <a>
                    <Edit /> Edit
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='btn'>
            <Button loading={loading} onClick={registerVendor} htmlType='submit' className='btn-sign'>
              {loading ? 'Authenticating...' : 'REGISTER'}
            </Button>
          </div>
      </VendorStyle>
    </UserWebLayout>
  );
};

export default VendorDetails;
