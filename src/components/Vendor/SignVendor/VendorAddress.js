import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { address } from '../../../redux/Vendor/vendorInfoSlice';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { SignStyled } from './SignStyled';
import router from 'next/router';
const VendorAddress = () => {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [btn, showBtn] = useState(false);
  // const [userAddress, setUserAddress] = useState(null)
  const getLocation = () => {
    setLoading(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates, showError);
      showBtn(true);
      setLoading(false);
    } else {
      alert('Geolocation is not allowed bt the browser');
    }
  };
  const getCoordinates = (position) => {
    console.log(position);
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };
  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        alert('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        alert('The request to get user location timed out.');
        break;
      case error.UNKNOWN_ERROR:
        alert('An unknown error occurred.');
        break;
    }
  };
  const [loading, setLoading] = useState(false);
  const onSubmit = (record) => {
    const {fullAddress} = record
    const data = {
        lat: latitude,
        long: longitude,
        fullAddress
    }
    setLoading(true);
    console.log(data)
    dispatch(address(data));
    router.push('/vendor/vendor-details');
  };
  return (
    <div data-aos='zoom-in'>
      <UserWebLayout webtitle={'Address Info'}>
        <SignStyled>
          <div className='img'>
            <img src='/logo2.png' alt='Logo' />
          </div>
          <div className='card-div'>
            <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>Latitude</label>
                <br></br>
                <Controller
                  control={control}
                  name='country'
                
                  render={({ field: { onChange } }) => (
                    <input
                      size='large'
                      type='text'
                     
                      disabled
                      value={latitude}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div>
                <label>Longitude</label>
                <br></br>
                <Controller
                  control={control}
                  name='long'
                
                  render={({ field: { onChange } }) => (
                    <input
                      size='large'
                      type='text'
                      disabled
                     
                      value={longitude}
                      onChange={onChange}
                    />
                  )}
                />
                {/* {errors.long && (
                  <span className='error'>This field is required</span>
                )} */}
              </div>
              <div>
                <label>Street & House No</label>
                <br></br>
                <Controller
                  control={control}
                  name='fullAddress'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <textarea size='large' type='text' onChange={onChange} />
                  )}
                />
                {errors.fullAddress && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div className='btn'>
                {btn ? (
                  <Button
                    loading={loading}
                    htmlType='submit'
                    className='btn-sign'>
                    {loading ? 'Authenticating...' : 'NEXT'}
                  </Button>
                ) : (
                  <Button
                    loading={loading}
                    onClick={() => getLocation()}
                    className='btn-sign'>
                    {loading ? 'Authenticating...' : 'GET LATITUDE & LONGITUDE'}
                  </Button>
                )}
              </div>
            </form>
          </div>
        </SignStyled>
      </UserWebLayout>
    </div>
  );
};

export default VendorAddress;
