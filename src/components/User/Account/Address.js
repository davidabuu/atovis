import { Button, Card, Col, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useDispatch, useSelector } from 'react-redux';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { SignStyled, LogoHolder, FormGroup } from '../../Vendor/SignVendor/SignStyled';
import { Controller } from 'react-hook-form';
const Address = () => { useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
 // const [userAddress, setUserAddress] = useState(null)
  const getLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(getCoordinates, showError)
    }else{
      alert('Geolocation is not allowed bt the browser')
    }
  }
  const getCoordinates = (position) => {
    console.log(position)
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude);
  }
  const showError = (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
      alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
    }
  }
  return (
    <div data-aos='zoom-in'>
      <UserWebLayout webtitle={'Address Info'}>
      <div className='card-div'>
            <form autoComplete='off' onSubmit={handleSubmit(LoginUser)}>
              <div>
                <label>Country</label>
                <br></br>
                <Controller
                  control={control}
                  name='country'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input size='large' type='text' onChange={onChange} />
                  )}
                />
                {errors.country && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div>
                <label>State</label>
                <br></br>
                <Controller
                  control={control}
                  name='state'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input size='large' type='text' onChange={onChange} />
                  )}
                />
                {errors.state && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div>
                <label>City</label>
                <br></br>
                <Controller
                  control={control}
                  name='city'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input size='large' type='text' onChange={onChange} />
                  )}
                />
                {errors.city && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div>
                <label>Street & House No</label>
                <br></br>
                <Controller
                  control={control}
                  name='street'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <textarea size='large' type='text' onChange={onChange} />
                  )}
                />
                {errors.street && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              </form>
              </div>
      </UserWebLayout>
    </div>
  );
};

export default Address;
