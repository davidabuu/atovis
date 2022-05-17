import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const initialState = {
  email: '',
  message: '',
  isError: false,
  isLoading: false,
};
//Forgot Password
export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (data, thunkAPI) => {
    try {
      return await authService.forgotPassword(data);
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

export const passwordSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.email = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        (state.isLoading = false), (state.email = action.payload);
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        (state.isLoading = false), (state.isError = true), (state.email = null);
        state.message = action.payload;
      });
  },
});

export const { reset } = passwordSlice.actions;
export default passwordSlice.reducer;
