import React, { useContext, Suspense } from 'react';

import './OrderHistory.css';

import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner';
import { AuthContext } from '../../../context/authContext';

import { useQuery } from 'react-query';
import { fetchGetProfile } from '../../../utils/api';

// import OrderContents from './OrderContents/OrderContents';
const OrderContents = React.lazy(() => import('./OrderContents/OrderContents'));

const OrderHistory = () => {
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    error,
    data: userData,
  } = useQuery([user.userId], () => fetchGetProfile(user.userId, user.token));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const { orders } = userData;

  return (
    <div className='order'>
      <h2>Order History</h2>
      {userData && (
        <div className='order__list'>
          <table>
            <tr>
              <th>Order Number</th>
              <th>Total Price</th>
              <th>Date</th>
            </tr>
            {orders.map(order => (
              <Suspense fallback={<LoadingSpinner />}>
                <OrderContents key={order._id} order={order} />
              </Suspense>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
