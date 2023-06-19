/* Here is where you will configure the store 
  The store needs some reducer slices!
*/ 

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../../client/features/auth/authSlice';
import AllProductsSlice from '../reducers/AllProductsSlice';
import singleProductSlice from '../reducers/singleProductSlice';
import cartReducer from '../reducers/CartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: AllProductsSlice,
    singleProduct: singleProductSlice,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../../client/features/auth/authSlice';
