//Reducer is going to help us control the state of the application
import {configureStore} from '@reduxjs/toolkit'
import authReducer from './redux/User/authSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer
    },
});
