import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';

import Category from './pages/Category';
import Home from './pages/Home';
import Products from './pages/Products';
import Account from './pages/Account';
import LogIn from './components/AccountPage/LogIn';
import CreateAccount from './components/AccountPage/CreateAccount';

import Layout from './components/UI/Layout.jsx';
import ScrollToTop from './components/utils/ScrollToTop';

import { AuthContext } from './components/context/authContext';
import { useContext } from 'react';
import Profile from './components/AccountPage/Profile';

function App() {
  const { user } = useContext(AuthContext);
  console.log(user);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={
          <ScrollToTop>
            <Layout />
          </ScrollToTop>
        }
      >
        <Route index element={<Home />} />
        <Route path='/my-account' element={<Account />}>
          <Route
            index
            element={user ? <Profile /> : <Navigate to='log-in' />}
          />
          <Route
            path='log-in'
            element={user ? <Navigate to={'/my-account'} /> : <LogIn />}
          />
          <Route
            path='create-account'
            element={user ? <Navigate to={'/my-account'} /> : <CreateAccount />}
          />
        </Route>
        <Route path='products/:productId' element={<Products />} />
        <Route path='category/:categoryId' element={<Category />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
