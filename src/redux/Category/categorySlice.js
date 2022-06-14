import { createSlice, createAsyncThunk
} from '@reduxjs/toolkit';
import categoryService from './categoryService';
const initialState = {
 category: [],
 isError: false,
 isSuccess: false,
 isLoading: false,
 message: '',
};
// Get  
export const getAllCategory = createAsyncThunk(
 'Category',
 async (thunkAPI) => {
   try {
     return await categoryService.getAllCategories();
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
export const getCategoryId = createAsyncThunk(
 'Single Category',
 async (id, thunkAPI) => {
   try {
     return await categoryService.getCategoryById(id);
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
export const categorySlice= createSlice({
 name: 'Category Slice',
 initialState,
 reducers: {
  //  reset: (state) => {
  //    (state.vendor = ''),
  //      (state.isLoading = false),
  //      (state.isSuccess = false),
  //      (state.isError = false);
  //  },
 },
 extraReducers: (builder) => {
     builder
     .addCase(getAllCategory.pending, (state => {
         state.isLoading = true
     }))
     .addCase(getAllCategory.fulfilled, (state, action) => {
         state.isLoading = false,
         state.isSuccess = true,
         state.category = action.payload
     })
     .addCase(getAllCategory.rejected, (state, action) => {
         state.isLoading = false,
         state.isError = true,
         state.category = null
         state.message = action.payload
     })
     .addCase(getCategoryId.pending, (state => {
       state.isLoading = true
   }))
   .addCase(getCategoryId.fulfilled, (state, action) => {
       state.isLoading = false,
       state.isSuccess = true,
       state.category = action.payload
   })
   .addCase(getCategoryId.rejected, (state, action) => {
       state.isLoading = false,
       state.isError = true,
       state.category = null
       state.message = action.payload
   })
 }
});

//export const { reset } = categorySlice.actions;
export default categorySlice.reducer;