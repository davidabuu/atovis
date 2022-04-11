import { Button } from 'antd';
import React from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { SignStyled } from './SignStyled';
const SignUp = () => {
  return (
    <div style={{ background: '#fff', height: '100vh' }}>
      <UserWebLayout webtitle={'Vendor Sign In'}>
        <SignStyled style={{ marginTop: '20px' }}>
          <img src='/logo2.png' alt='Log' />
          <div className='form-control'>
            <label>Full Name</label>
            <br />
            <input type={'text'} placeholder='Enter Your Phone Number' />
          </div>
          <div className='form-control'>
            <label>Offical Email Address</label>
            <br />
            <input type={'email'} placeholder='Enter your Email' />
          </div>
          <div className='form-control'>
            <label>Phone Number</label>
            <br />
            <input type={'number'} placeholder='Enter your Phone number' />
          </div>
          <div className='form-control'>
            <label>Password</label>
            <br />
            <input type={'password'} placeholder='Enter your Password' />
          </div>
          <div className='form-control'>
            <label>Confirm Password</label>
            <br />
            <input type={'password'} placeholder='Enter your Password' />
          </div>
          <Button>REGISTER</Button>
          <p>
            Already have an account? <a>Login</a>
          </p>
        </SignStyled>
      </UserWebLayout>
    </div>
  );
};

export default SignUp;
