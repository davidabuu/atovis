import { Button, Card, Col, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useDispatch, useSelector } from 'react-redux';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { SignStyled, LogoHolder, FormGroup } from '../../Vendor/SignVendor/SignStyled';
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
        <SignStyled style={{ marginTop: '20px' }}>
          <Card>
            <form autoComplete='off'>
              <Row gutter={24}>
                <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                    <label>Latitude</label>
                    <Input size='large' name='newemail' value={latitude} />
                  </FormGroup>
                </Col>
                <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                    <label>Longitude</label>
                    <Input size='large' name='newemail' value={longitude} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={24} xl={24} lg={24}>
                <FormGroup>
                    <Button onClick={() => getLocation()}>Get Location</Button>
                  </FormGroup>
                </Col>
              </Row>
            </form>
          </Card>
        </SignStyled>
      </UserWebLayout>
    </div>
  );
};

export default Address;
