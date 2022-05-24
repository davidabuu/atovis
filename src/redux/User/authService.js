import axios from 'axios';
import router from 'next/router'
import { storeInLocalStorage } from '../../components/utils/usableFunction';
//Base URL
const API_URL = process.env.APP_BASE_URL;
//Register User
const register = async (userData) => {
  console.log(API_URL);
  const response = await axios.post(`${API_URL}/buyer/register`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.token));
    router.push('/user/verification')
  }
  return response.data;
};
//Login User
const login = async (data) => {
  const response = await axios.post(`${API_URL}/buyer/login`, data);
  if (response.data) {
    console.log(response.data.data.account.firstName);
    storeInLocalStorage('user', response.data.token)
    storeInLocalStorage('name', JSON.stringify(response.data.data.account.firstName))
    router.push('/user/landing-page')

    return response.data;
  }
};
//Forgot Password
const forgotPassword = async (data) => {
  const response = await axios.post(`${API_URL}/forgot-password`, data);
  if (response.data) return response.data;
};

//Verify Mail
const verifyMail = async (code) => {
  const response = await axios.post(`${API_URL}/verify-email`, code);
  if (response.data) return response.data;
};
const authSevice = {
  register,
  login,
  forgotPassword,
  verifyMail
};
export default authSevice;

