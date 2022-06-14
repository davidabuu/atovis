import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartService from './cartService';

const initialState = {
  cartItems: [],
  isError: false,
  quantity: 0,
  productId: null,
  isSuccess: false,
  isLoading: false,
  message: '',
};
export const fetchUserCart = createAsyncThunk(
  'cart/userCart',
  async (thunkAPI) => {
    try {
      return await cartService.getCartItems();
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
//This function is used to add to the user's cart item
export const addToUserCart = createAsyncThunk(
  'cart/addToCart',
  async (productId, quantity, thunkAPI) => {
    try {
      return await cartService.addToCart((productId, quantity));
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
//Delete From User's cart
export const deleteAnItem = createAsyncThunk(
  'cart/deleteCart',
  async (id, thunkAPI) => {
    try {
      return await cartService.deleteFromCart(id);
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
export const cartSlice = createSlice({
  name: 'Cart Items',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserCart.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.cartItems = action.payload);
      })
      .addCase(deleteAnItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAnItem.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.id = action.payload);
      })
      .addCase(deleteAnItem.rejected, (state, action) => {
        (state.isLoading = false), (state.isError = true), (state.id = null);
        state.message = action.payload;
      });
  },
});

export const { reset } = cartSlice.actions;
export default cartSlice.reducer;
