import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap-icons/font/bootstrap-icons.css';


import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import productsReducer from './Features/ProductsSlice';
import { productapi } from './Features/ProductsApi';
import cartReducer, { getCartSubTotal } from './Features/CartSlice';


const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productapi.reducerPath] : productapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat(productapi.middleware);
  },
});
store.dispatch(getCartSubTotal);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
