import React from 'react';

import './OrderProducts.css';

const OrderProducts = ({ product }) => {
  return (
    <div className='order-products'>
      <div className='order-products__image'>
        <img src={product.productId.imgUrl} alt='' />
      </div>
      <div className='order-products__details'>
        <p className='order-products__name'>{product.productId.name}</p>
        <p className='order-products__price'>${product.productId.price}</p>
      </div>
      <div className='order-products__subtotal-container'>
        <p className='order-products__subtotal'>${product.subtotal}</p>
        <p className='order-products__quantity'>Qty: {product.quantity}</p>
      </div>
    </div>
  );
};

export default OrderProducts;
