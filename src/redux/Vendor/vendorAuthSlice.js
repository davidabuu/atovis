import { createSlice, createAsyncThunk
 } from '@reduxjs/toolkit';
import vendorAuthService from './vendorAuthService';
const initialState = {
  vendor: '',
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
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
export const vendorAuthSlice = createSlice({
  name: 'Vendor Auth',
  initialState,
  reducers: {
    reset: (state) => {
      (state.vendor = ''),
        (state.isLoading = false),
        (state.isSuccess = false),
        (state.isError = false);
    },
  },
  extraReducers: (builder) => {
      builder
      .addCase(register.pending, (state => {
          state.isLoading = true
      }))
      .addCase(register.fulfilled, (state, action) => {
          state.isLoading = false,
          state.isSuccess = true,
          state.vendor = action.payload
      })
      .addCase(register.rejected, (state, action) => {
          state.isLoading = false,
          state.isError = true,
          state.vendor = null
          state.message = action.payload
      })
      .addCase(login.pending, (state => {
        state.isLoading = true
    }))
    .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false,
        state.isSuccess = true,
        state.vendor = action.payload
    })
    .addCase(login.rejected, (state, action) => {
        state.isLoading = false,
        state.isError = true,
        state.vendor = null
        state.message = action.payload
    })
  }
});

export const { reset } = vendorAuthSlice.actions;
export default vendorAuthSlice.reducer;