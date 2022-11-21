import { useContext } from 'react';

import './OrderDetails.css';

import LoadingSpinner from '../../../../components/UI/LoadingSpinner/LoadingSpinner';
import { fetchOrderDetails } from '../../../../utils/api';
import { AuthContext } from '../../../../context/authContext';
import OrderProducts from './OrderProducts/OrderProducts';

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const { orderId } = useParams();
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    error,
    data: orderDetails,
  } = useQuery('fetchOrderDetails', () =>
    fetchOrderDetails({ orderId, token: user.token })
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const date = new Date(orderDetails.purchaseDate).toDateString();

  return (
    <div className='order-details'>
      <h2>Order Details</h2>
      <div className='order-details__main'>
        <div>
          <h3>Order Id: {orderId}</h3>
          <p className='order-details__date'>Order Date: {date}</p>
        </div>
        {orderDetails && (
          <div className='order-details__contents'>
            {orderDetails.products.map(product => (
              <OrderProducts key={product._id} product={product} />
            ))}
          </div>
        )}
        <p className='order-details__total'>
          Total: ${orderDetails.totalPrice}
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
