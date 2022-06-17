import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import authReducer from './redux/User/authSlice';
import forgotPassword from './redux/User/forgetPassowordSlice';
import verifyMail from './redux/User/verifySlice';
import vendorSlice from './redux/Vendor/vendorInfoSlice';
import vendorAuth from './redux/Vendor/vendorAuthSlice';
import cartSlice from './redux/User/Cart/CartSlice';
import storage from 'redux-persist/lib/storage';
import categorySlice from './redux/Category/categorySlice';
import singleProduct from './redux/User/Product/ProductDetailSlice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const reducer = combineReducers({
  auth: authReducer,
  forgotPass: forgotPassword,
  verify: verifyMail,
  vendorDetails: vendorSlice,
  vendorAuth,
  singleProduct,
  cartSlice,
  categorySlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const storePersist = persistStore(store);

export { store, storePersist };
