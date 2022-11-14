import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from 'react-query';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import App from './App';
import Category from './pages/Category';
import Home from './pages/Home';
import Products from './pages/Products';
import Account from './pages/Account';
import LogIn from './components/AccountPage/LogIn';
import CreateAccount from './components/AccountPage/CreateAccount';
import AuthContextProvider from './components/context/authContext';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
