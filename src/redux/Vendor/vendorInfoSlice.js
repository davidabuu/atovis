import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { storeInLocalStorage } from '../../components/utils/usableFunction';
import vendorAuthService from './vendorAuthService';
const initialState = {
  sellerDetails: '',
  bussinessDetails: '',
  paymentDetails: '',
};
// Register User
export const register = createAsyncThunk(
  'auth/register',
  async (vendor, thunkAPI) => {
    try {
      return await vendorAuthService.register(vendor);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//Login User
export const login = createAsyncThunk(
  'auth/login',
  async (vendor, thunkAPI) => {
    try {
      return await vendorAuthService.login(vendor);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const vendorSellerDetailsSlice = createSlice({
  name: 'Vendor Details',
  initialState,
  reducers: {
    reset: (state) => {
      state.sellerDetails = '';
    },
    sellerRegister: (state, action) => {
      state.sellerDetails = action.payload;
      storeInLocalStorage('seller', JSON.stringify(action.payload));
    },
    bussinessRegister: (state, action) => {
      state.bussinessDetails = action.payload;
      storeInLocalStorage('bussiness', JSON.stringify(action.payload));
    },
    paymentRegister: (state, action) => {
      state.paymentDetails = action.payload;
      storeInLocalStorage('account', JSON.stringify(action.payload));
    },
  },
});

export const { reset, sellerRegister, bussinessRegister, paymentRegister } =
  vendorSellerDetailsSlice.actions;
export default vendorSellerDetailsSlice.reducer;
