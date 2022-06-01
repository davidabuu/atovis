// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import productService from './productService';

// const initialState = {
//   productDetails: '',
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message:''
// };
// // Get Single Product
// export const singleProductInfo = createAsyncThunk(
//   'auth/singleProductInfo',
//   async (id, thunkAPI) => {
//     try {
//       return await productService.singleProductDetails(id);
//     } catch (error) {
//         const message = (error.response && error.response.data && error.response.data.message) || error.message
//         return thunkAPI.rejectWithValue(message)
//     }
//   }
// ); 
// export const singleProductSlice = createSlice({
//   name: 'Single Product',
//   initialState,
//   reducers: {
//     reset: (state) => {
//       (state.isLoading = false),
//         (state.isSuccess = false),
//         (state.isError = false);
//     },
//   },
//   extraReducers: (builder) => {
//       builder
//       .addCase(productService.pending, (state => {
//           state.isLoading = true
//       }))
//       .addCase(productService.fulfilled, (state, action) => {
//           state.isLoading = false,
//           state.isSuccess = true,
//           state.productDetails = action.payload
//       })
//       .addCase(productService.rejected, (state, action) => {
//           state.isLoading = false,
//           state.isError = true,
//           state.productDetails = null
//           state.message = action.payload
//       })
//   }
// });

// export const { reset } = singleProductSlice.actions;
// export default singleProductSlice.reducer;
