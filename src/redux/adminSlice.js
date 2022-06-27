import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './User/authService';

const initialState = {
  admin: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message:''
};
//Login Admin
export const adminLogin = createAsyncThunk(
  'auth/login', async(user, thunkAPI) => {
    try {
      return await authService.loginAdmin(user)
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message
        return thunkAPI.rejectWithValue(message)
    }
  }
)
export const adminSlice = createSlice({
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
      .addCase(adminLogin.pending, (state => {
          state.isLoading = true
      }))
      .addCase(adminLogin.fulfilled, (state, action) => {
          state.isLoading = false,
          state.isSuccess = true,
          state.admin= action.payload
      })
      .addCase(adminLogin.rejected, (state, action) => {
          state.isLoading = false,
          state.isError = true,
          state.admin= null,
          state.message = action.payload
      })
    
  }
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;
