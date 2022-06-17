import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalCount: 0,
};
export const cartSlice = createSlice({
  name: 'Cart Items',
  initialState,
  reducers: {
    getCartTotal: (state, action) => {
      let { totalAmount, totalCount } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartItem.totalAmount += itemTotal;
          cartTotal.totalCount += quantity;
          return cartTotal;
        },
        { totalAmount: 0, totalCount: 0 }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    addToCart: (state, action) => {
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex], quantity:+1
        }
        toast.success('Item Increase in Quantity', {
          positon: 'top-right',
        });
      } else {
        const newItem = {...action.payload, quantity: 1}
        state.cartItems.push(newItem)
        toast.success('New Item Added', {
          positon: 'top-right',
        });
      }
    },
    deleteItemFromCart: (state, action) => {
      state.cartItems.map((cartItem) => {
        if(cartItem._id === action.payload._id){
          const nextCartItems = state.cartItems.filter((item) => item._id !== action.payload._id)
          state.cartItems = nextCartItems;
          toast.success('Item Removed', {
            positon: 'top-right',
          });
        }
      })
    },
    decreaseItemFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id === action,
        payload._id
      );
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
        toast.success('Item reduced', {
          positon: 'top-right',
        });
      } else if (state.cartItems[itemIndex].quantity === 1) {
        state.cartItems[itemIndex].quantity === 0;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      toast.success('Cart Items Cleared', {
        positon: 'top-right',
      });
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  deleteItemFromCart,
  decreaseItemFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
