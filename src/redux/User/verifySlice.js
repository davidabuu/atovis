import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const initialState = {
  code: '',
  message: '',
  isError: false,
  isLoading: false,
  isSuccess:false,
};
//Forgot Password
export const verifyMail = createAsyncThunk(
  'auth/verify-mail',
  async (data, thunkAPI) => {
    try {
      return await authService.verifyMail(data);
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

export const verifySlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
        (state.isLoading = false),
        (state.isSuccess = false),
        (state.isError = false);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        (state.isLoading = false), (state.code = action.payload), (state.isSuccess = true);
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        (state.isLoading = false), (state.isError = true), (state.code = '');
        state.message = action.payload;
      });
  },
});

export const { reset } = verifySlice.actions;
export default verifySlice.reducer;
