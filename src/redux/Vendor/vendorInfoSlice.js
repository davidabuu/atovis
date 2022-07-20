import { createSlice} from '@reduxjs/toolkit';
const initialState = {
  sellerDetails: '',
  businessDetails: '',
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
    businessRegister: (state, action) => {
      state.businessDetails = action.payload;
      
    },
    paymentRegister: (state, action) => {
      state.paymentDetails = action.payload;
    
    },
  },
});

export const { reset, sellerRegister, businessRegister, paymentRegister } =
  vendorSellerDetailsSlice.actions;
export default vendorSellerDetailsSlice.reducer;

