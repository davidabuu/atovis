import { Card, Col, Input, Button, Select, Row, notification } from 'antd';
import Link from 'next/link';
import React from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { APP_BASE_URL, User } from '../utils/ApiList';
import { register, reset } from '../../redux/User/authSlice';
import router from 'next/router';
import {
  FormGroup,
  LogoHolder,
  SignStyled,
} from '../Vendor/SignVendor/SignStyled';
import UserWebLayout from '../WebLayout/UserWebLayout';
const UserSignUp = () => {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const { Option } = Select;
  const dispatch = useDispatch();
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      setLoading(false);
      notification.error({
        message: ' Error',
        description: message,
        duration: 1000,
      });
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);
  const LoginUser = async (record) => {
    const { password, confirmPassword } = record;
    console.log(password, confirmPassword);
    if (password !== confirmPassword) {
      notification.error({
        message: 'Password Error',
        description: 'Password do not match',
        duration: 1000,
      });
    } else {
      setLoading(true);
      dispatch(register(record));
    }
  };
  return (
    <UserWebLayout webtitle='Sign Up'>
      <div data-aos='zoom-in'>
        <SignStyled style={{ marginTop: '20px' }}>
          <div className='card-div'>
            <form autoComplete='off' onSubmit={handleSubmit(LoginUser)}>
              <h2>Sign Up</h2>
              <p>Create an Account and get upto 50% on selected products</p>
              <div>
                <label>First Name</label>
                <br></br>
                <Controller
                  control={control}
                  name='firstName'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input size='large' type='text' onChange={onChange} />
                  )}
                />
                {errors.firstName && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div>
                <label>Last Name</label>
                <br></br>
                <Controller
                  control={control}
                  name='lastName'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input size='large' type='text' onChange={onChange} />
                  )}
                />
                {errors.lastName && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div>
                <label>Password</label>
                <br></br>
                <Controller
                  control={control}
                  name='password'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input
                      size='large'
                      type='password'
                      onChange={onChange}
                      minLength={'8'}
                    />
                  )}
                />
                {errors.password && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div>
                <label>Confirm Password</label>
                <br></br>
                <Controller
                  control={control}
                  name='confirmPassword'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input
                      size='large'
                      type='password'
                      onChange={onChange}
                      minLength={'8'}
                    />
                  )}
                />
                {errors.confirmPassword && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div className='btn'>
                <Button
                  loading={loading}
                  htmlType='submit'
                  className='btn-google-sign'>
                  {loading ? 'Authenticating...' : 'Sign Up'}
                </Button>
              </div>
              <h3>OR</h3>
              <div className='btn'>
                <Button className='btn-sign'>Sign Up with Google</Button>
              </div>
              <div>
                <Link>
                  <a>
                    <p>
                      Already have an account ? <a>Sign Ip</a>
                    </p>
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </SignStyled>
      </div>
    </UserWebLayout>
  );
};

export default UserSignUp;
