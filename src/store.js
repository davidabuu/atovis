//Reducer is going to help us control the state of the application
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/User/authSlice';
import forgotPassword from './redux/User/forgetPassowordSlice';
import verifyMail from './redux/User/verifySlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    forgotPass: forgotPassword,
    verify: verifyMail,
  },
});
