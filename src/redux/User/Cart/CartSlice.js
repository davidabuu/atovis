import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalAmount:0,
  totalCount:0
};
export const cartSlice = createSlice({
  name: 'Cart Items',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.totalCount++
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
