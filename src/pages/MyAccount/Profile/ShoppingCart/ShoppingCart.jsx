import React from 'react';

import './ShoppingCart.css';

import CartContents from '../CartContents/CartContents';
import Button from '../../../../components/UI/Button/Button';

import { redirect, useNavigate } from 'react-router-dom';

const ShoppingCart = ({ userData, user }) => {
  const navigate = useNavigate();
  const checkoutHandler = async () => {
    try {
      const result = await fetch(
        `http://localhost:3000/create-checkout-session/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'BEARER ' + user.token,
          },
        }
      );
      const url = await result.json();
      window.location.replace(url.url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className='shopping'>
        {userData.user.cart.map(prod => {
          return (
            <CartContents key={prod.productId._id} prod={prod} user={user} />
          );
        })}
      </div>
      <Button className='checkout__button' onClick={checkoutHandler}>
        Procced to checkout
      </Button>
    </>
  );
};

export default ShoppingCart;
