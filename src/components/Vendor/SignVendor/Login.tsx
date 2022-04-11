import { Button } from 'antd';
import React from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import SignLayout from './SignLayout';
import { SignStyled } from './SignStyled';
const Login = () => {
  return (
    <div style={{ background: '#fff', height: '100vh' }}>
      <UserWebLayout webtitle={'Vendor Sign In'}>
        <SignStyled>
          <img src='/logo2.png' alt='Log' />
          <SignLayout info={'Login'} />
          <div className='form-control'>
            <label>Email Address</label>
            <br />
            <input type={'text'} placeholder='Enter Your Email' />
          </div>
          <div className='form-control'>
            <label>Password</label>
            <br />
            <input type={'text'} placeholder='Enter your Password' />
          </div>
          <Button>LOGIN</Button>
          <p>
            Don't have an account? <a>Sign In</a>
          </p>
        </SignStyled>
      </UserWebLayout>
    </div>
  );
};

export default Login;
