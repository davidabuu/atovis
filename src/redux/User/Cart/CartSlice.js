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
    addToCart: (state, action) => {
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          quantity: state.cartItems[existingIndex].quantity + 1,
        };
        toast.success('Item Increase in Quantity', {
          positon: 'top-right',
        });
      } else {
        let newItem = { ...action.payload, quantity: 1 };
        state.cartItems.push(newItem);
        toast.success('New Item Added', {
          positon: 'top-right',
        });
      }
    },
    deleteItemFromCart: (state, action) => {
      state.cartItems.map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item._id !== action.payload._id
          );
          state.cartItems = nextCartItems;
          toast.success('Item Removed', {
            positon: 'top-right',
          });
        }
      });
    },
    decreaseItemFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      //console.log(existingIndex);
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
    getCartTotal: (state, action) => {
      let { total, cartQuantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.total += itemTotal;
          cartTotal.cartQuantity += quantity;
          return cartTotal;
        },
        {
          total: 0,
          cartQuantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.totalCount = cartQuantity;
      state.totalAmount = total;
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
