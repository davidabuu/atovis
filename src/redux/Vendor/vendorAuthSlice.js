import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sellerDetails: '',
  bussinessDetails: '',
  paymentDetails: '',
};

export const vendorSellerDetailsSlice = createSlice({
  name: 'Vendor Details',
  initialState,
  reducers: {
    reset: (state) => {
      state.sellerDetails = '';
    },
    sellerRegister: (state, action) => {
      state.sellerDetails = action.payload;
    },
    bussinessRegister: (state, action) => {
      state.bussinessDetails = action.payload;
    },
    paymentRegister: (state, action) => {
      state.paymentDetails = action.payload;
    },
  },
});

export const { reset, sellerRegister, bussinessRegister, paymentRegister } =
  vendorSellerDetailsSlice.actions;
export default vendorSellerDetailsSlice.reducer;
