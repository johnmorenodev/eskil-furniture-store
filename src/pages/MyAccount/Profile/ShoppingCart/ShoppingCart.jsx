import { useContext, useState } from 'react';

import './ShoppingCart.css';

import CartContents from '../CartContents/CartContents';
import Button from '../../../../components/UI/Button/Button';
import { AuthContext } from '../../../../context/authContext';

import { checkoutHandler } from '../../../../utils/api';

const ShoppingCart = ({ userData }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className='shopping'>
        {userData.cart.map(prod => {
          return (
            <CartContents key={prod.productId._id} prod={prod} user={user} />
          );
        })}
      </div>
      <p className='shopping__total'>Total: ${userData.total}</p>
      <Button
        className='checkout__button'
        onClick={() => checkoutHandler(user.token)}
      >
        Procced to checkout
      </Button>
    </>
  );
};

export default ShoppingCart;
