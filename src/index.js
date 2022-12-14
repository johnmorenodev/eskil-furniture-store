import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import AuthContextProvider from './context/authContext';

import { QueryClient, QueryClientProvider } from 'react-query';
import CartContextProvider from './context/cartContext';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
