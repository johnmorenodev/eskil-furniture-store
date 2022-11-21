import React, { useContext, Suspense } from 'react';

//CSS
import './App.css';

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
import OrderHistory from './pages/MyAccount/OrderHistory/OrderHistory';
import NotFound from './components/shared/NotFound/NotFound';

import LoadingSpinner from './components/UI/LoadingSpinner/LoadingSpinner';

const Category = React.lazy(() => import('./pages/Category/Category'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Products = React.lazy(() => import('./pages/Products/Products'));
const Profile = React.lazy(() => import('./pages/MyAccount/Profile/Profile'));
const OrderDetails = React.lazy(() =>
  import('./pages/MyAccount/OrderHistory/OrderDetails/OrderDetails')
);
const LogIn = React.lazy(() => import('./pages/MyAccount/Login/LogIn'));
const CreateAccount = React.lazy(() =>
  import('./pages/MyAccount/CreateAccount/CreateAccount')
);
const Layout = React.lazy(() => import('./components/UI/Layout/Layout'));
const ScrollToTop = React.lazy(() =>
  import('./components/shared/ScrollToTop/ScrollToTop')
);

function App() {
  const { user } = useContext(AuthContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ScrollToTop>
              <Layout />
            </ScrollToTop>
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/my-account'
          element={
            user ? (
              <Suspense fallback={<LoadingSpinner />}>
                <Profile />
              </Suspense>
            ) : (
              <Navigate to='log-in' />
            )
          }
        />

        <Route
          path='/my-account/order-history'
          element={
            user ? (
              <Suspense fallback={<LoadingSpinner />}>
                <OrderHistory />
              </Suspense>
            ) : (
              <Navigate to='/my-account/log-in' />
            )
          }
        />

        <Route
          path='/my-account/order-history/:orderId'
          element={
            user ? (
              <Suspense fallback={<LoadingSpinner />}>
                <OrderDetails />
              </Suspense>
            ) : (
              <Navigate to='/my-account/log-in' />
            )
          }
        />
        <Route
          path='/my-account/log-in'
          element={
            user ? (
              <Navigate to={'/my-account'} />
            ) : (
              <Suspense fallback={<LoadingSpinner />}>
                <LogIn />
              </Suspense>
            )
          }
        />
        <Route
          path='/my-account/create-account'
          element={
            user ? (
              <Navigate to={'/my-account'} />
            ) : (
              <Suspense fallback={<LoadingSpinner />}>
                <CreateAccount />
              </Suspense>
            )
          }
        />

        <Route
          path='products/:productId'
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Products />
            </Suspense>
          }
        />
        <Route
          path='category/:categoryId'
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Category />
            </Suspense>
          }
        />
        <Route
          path='/*'
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
