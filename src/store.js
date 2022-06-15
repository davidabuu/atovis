//Reducer is going to help us control the state of the application
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/User/authSlice';
import forgotPassword from './redux/User/forgetPassowordSlice';
import verifyMail from './redux/User/verifySlice';
import vendorSlice from './redux/Vendor/vendorInfoSlice';
import vendorAuth from './redux/Vendor/vendorAuthSlice';
import cartSlice from './redux/User/Cart/CartSlice';
import storage from 'redux-persist/lib/storage';
import categorySlice from './redux/Category/categorySlice';
import singleProduct from './redux/User/Product/ProductDetailSlice';
import { persistReducer } from 'redux-persist';
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const reducer = combineReducers({
  auth: authReducer,
  forgotPass: forgotPassword,
  verify: verifyMail,
  vendorDetails: vendorSlice,
  vendorAuth,
  singleProduct,
  cartSlice,
  categorySlice,
});
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer:persistedReducer,
});
