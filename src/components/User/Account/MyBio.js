import Link from 'next/link';
import React from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
//import { login, reset } from '../../redux/User/authSlice';
import router from 'next/router';
import { notification, Button } from 'antd';
import { reset, login } from '../../../redux/User/authSlice';
import { SignStyled } from '../../Vendor/SignVendor/SignStyled';
import UserWebLayout from '../../WebLayout/UserWebLayout';
const LoginInfo = () => {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
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
    } else if (isSuccess) {
      router.push('/user/landing-page');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);
  const LoginUser = async (record) => {
    if (isError) {
      notification.error({
        message: ' Error',
        description: message,
        duration: 1000,
      });
    } else {
      setLoading(true);
      dispatch(login(record));
    }
  };
  return (
    <UserWebLayout webtitle='Sign In'>
      <div data-aos='zoom-in'>
        <SignStyled style={{ marginTop: '20px' }}>
          <div className='card-div'>
            <form autoComplete='off' onSubmit={handleSubmit(LoginUser)}>
              <div>
                <label>First Name</label>
                <br></br>
                <Controller
                  control={control}
                  name='firstName'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input size='large' type='email' onChange={onChange} />
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
                    <input
                      size='large'
                      type='text'
                      onChange={onChange}
                     
                    />
                  )}
                />
                {errors.lastName && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div>
                <label>Gender</label>
                <br></br>
                <Controller
                  control={control}
                  name='gender'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input
                      size='large'
                      type='text'
                      onChange={onChange}
                   
                    />
                  )}
                />
                {errors.gender && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div>
                <label>Age</label>
                <br></br>
                <Controller
                  control={control}
                  name='age'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input
                      size='large'
                      type='number'
                      onChange={onChange}
                   
                    />
                  )}
                />
                {errors.age && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div className='btn'>
                <Button
                  loading={loading}
                  htmlType='submit'
                  className='btn-sign'>
                  {loading ? 'Authenticating...' : 'SAVE BIO'}
                </Button>
              </div>
            </form>
          </div>
        </SignStyled
        >
      </div>
    </UserWebLayout>
  );
};

export default LoginInfo;
