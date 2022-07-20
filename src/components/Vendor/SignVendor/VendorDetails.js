import { Edit } from '@material-ui/icons';
import { Button, Col, notification, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { VendorStyle} from './SignStyled';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/Vendor/vendorAuthSlice';
const VendorDetails = () => {
  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.vendorAuth
  );
  const [loading, setLoading] = useState(false);
  const { sellerDetails, businessDetails, paymentDetails} = useSelector(
    (state) => state.vendorDetails
  );
  //console.log(address)
  const data = {
    sellerDetails,
    businessDetails,
    paymentDetails,
  }
  const dispatch = useDispatch()
  console.log(data)
  useEffect(() => {
   if(isSuccess){
      setLoading(false)
      notification.error({
        message: ' Error',
        description: <Link href='/vendor/login'><a>Congrats you are now a Vendor. Click Here</a></Link>,
      duration: 1000,
      });
    }
  })
  const registerVendor = async () => {
    if (!isError) {
      notification.error({
        message: ' Error',
        description: message[0].message,
        duration: 1000,
      });
    } else {
      setLoading(true);
      dispatch(register(data));
    }
  }
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
                <p>{businessDetails.name}</p>
              </div>
              <div>
                <h2>Bussiness Type</h2>
                <p>{businessDetails.type}</p>
              </div>
              <div>
                <h2>CAC Regisrtation Number</h2>
                <p>{businessDetails.cacNumber}</p>
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
          {/* <div>
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
          </div> */}
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
