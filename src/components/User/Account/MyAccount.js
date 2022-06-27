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
                <label>Email Address</label>
                <br></br>
                <Controller
                  control={control}
                  name='email'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input size='large' type='email' onChange={onChange} />
                  )}
                />
                {errors.email && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div>
                <label>Old Password</label>
                <br></br>
                <Controller
                  control={control}
                  name='password'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input
                      size='large'
                      type='oldPassword'
                      onChange={onChange}
                      minLength={'8'}
                    />
                  )}
                />
                {errors.oldPassword && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div>
                <label>New Password</label>
                <br></br>
                <Controller
                  control={control}
                  name='newPassword'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input
                      size='large'
                      type='newPassword'
                      onChange={onChange}
                      minLength={'8'}
                    />
                  )}
                />
                {errors.newPassword && (
                  <span className='error'>This field is required</span>
                )}
              </div>
              <div className='btn'>
                <Button
                  loading={loading}
                  htmlType='submit'
                  className='btn-sign'>
                  {loading ? 'Authenticating...' : 'Update Info'}
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
