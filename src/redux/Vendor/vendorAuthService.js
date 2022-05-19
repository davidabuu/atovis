import axios from 'axios';

//Base URL
const API_URL = process.env.APP_BASE_URL;
//Register User
const register = async (vendorData) => {
  console.log(API_URL);
  const response = await axios.post(`${API_URL}/vendor/register`, vendorData);

  if (response.data) {
    localStorage.setItem('vendor', JSON.stringify(response.data.token));
  }
  return response.data;
};
//Login User
const login = async (data) => {
  const response = await axios.post(`${API_URL}/vendor/login`, data);
  if (response.data) {
    console.log(response.data);
    localStorage.setItem('user', JSON.stringify(response.data.token));
    return response.data;
  }
};
const vendorAuthSevice = {
  register,
  login,
};
export default vendorAuthSevice;
