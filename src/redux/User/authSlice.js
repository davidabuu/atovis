import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message:''
};
// Register User
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message
        return thunkAPI.rejectWithValue(message)
    }
  }
); 
//Login User
export const login = createAsyncThunk(
  'auth/login', async(data, thunkAPI) => {
    try {
      return await authService.login(data)
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message
        return thunkAPI.rejectWithValue(message)
    }
  }
)
export const authSlice = createSlice({
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
      .addCase(register.pending, (state => {
          state.isLoading = true
      }))
      .addCase(register.fulfilled, (state, action) => {
          state.isLoading = false,
          state.isSuccess = true,
          state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
          state.isLoading = false,
          state.isError = true,
          state.user = null
          state.message = action.payload
      })
      .addCase(login.pending, (state => {
        state.isLoading = true
    }))
    .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false,
        state.isSuccess = true,
        state.user = action.payload
    })
    .addCase(login.rejected, (state, action) => {
        state.isLoading = false,
        state.isError = true,
        state.user = null
        state.message = action.payload
    })
  }
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;