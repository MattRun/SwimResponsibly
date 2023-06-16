/* Here is where you will configure the store 
  The store needs some reducer slices!
*/ 

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../../client/features/auth/authSlice';
import AllProductsSlice from '../reducers/AllProductsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: AllProductsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../../client/features/auth/authSlice';
