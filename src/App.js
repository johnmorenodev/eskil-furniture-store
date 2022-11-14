import { useContext } from 'react';

//CSS
import './App.css';

//REACT COMPONENTS
import Category from './pages/Category/Category';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Profile from './pages/MyAccount/Profile/Profile';
import Account from './pages/MyAccount/Account';
import LogIn from './pages/MyAccount/Login/LogIn';
import CreateAccount from './pages/MyAccount/CreateAccount/CreateAccount';
import Layout from './components/UI/Layout/Layout';
import ScrollToTop from './utils/ScrollToTop';

//THIRD PARTY
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';

//UTILS
import { AuthContext } from './context/authContext';

function App() {
  const { user } = useContext(AuthContext);

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
