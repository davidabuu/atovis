//Reducer is going to help us control the state of the application
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/User/authSlice';
import forgotPassword from './redux/User/forgetPassowordSlice';
import verifyMail from './redux/User/verifySlice';
import vendorSlice from './redux/Vendor/vendorInfoSlice';
import vendorAuth from './redux/Vendor/vendorAuthSlice';
import singleProduct from './redux/User/Product/ProductDetailSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    forgotPass: forgotPassword,
    verify: verifyMail,
    vendorDetails: vendorSlice,
    vendorAuth,
    singleProduct
  },
});
