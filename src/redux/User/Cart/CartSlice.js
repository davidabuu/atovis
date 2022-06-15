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
    getCartTotal: (state, action) => {
      let {totalAmount, totalCount} = state.cartItems.reduce((cartTotal, cartItem) => {
        const {price, quantity} = cartItem
        const itemTotal = price * quantity;
         cartItem.totalAmount += itemTotal
         cartTotal.totalCount += quantity;
         return cartTotal
      }, {totalAmount: 0, totalCount: 0})
      state.totalAmount = parseInt(totalAmount.toFixed(2))
      state.totalCount = totalCount
    },
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.totalCount++
    },
  },
});

export const { addToCart, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
