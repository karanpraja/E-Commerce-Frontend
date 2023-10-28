import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../components/products/ProductsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
