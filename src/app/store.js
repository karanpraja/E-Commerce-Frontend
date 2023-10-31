import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../components/products/ProductsSlice';
import authReducer from '../auth/authSlice'
export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth:authReducer
  },
});
