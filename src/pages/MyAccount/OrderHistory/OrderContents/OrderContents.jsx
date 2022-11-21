import React from 'react';

import './OrderContents.css';

import { Link } from 'react-router-dom';

const OrderContents = ({ order }) => {
  const date = new Date(order.purchaseDate).toDateString();

  return (
    <tr>
      <td>
        <Link to={`${order._id}`}>{order._id}</Link>
      </td>
      <td>$ {order.totalPrice}</td>
      <td>{date}</td>
    </tr>
  );
};

export default OrderContents;
