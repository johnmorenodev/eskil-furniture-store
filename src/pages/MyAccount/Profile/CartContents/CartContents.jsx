import { useState, useEffect } from 'react';

import './CartContents.css';

import QuantityButton from '../../../../components/UI/Button/QuantityButton/QuantityButton';

import { CiTrash } from 'react-icons/ci';
import { useMutation, useQueryClient } from 'react-query';
import { fetchChangeQuantity, fetchRemoveProduct } from '../../../../utils/api';

const CartContents = ({ prod, user }) => {
  const [quantity, setQuantity] = useState(prod.quantity);
  const queryClient = useQueryClient();

  useEffect(() => {
    quantityMutation.mutate({
      token: user.token,
      quantity: quantity,
      productId: prod.productId._id,
    });
  }, [quantity]);

  const quantityMutation = useMutation(fetchChangeQuantity, {
    onSuccess: () => {
      queryClient.invalidateQueries([user.userId]);
    },
  });

  const removeProductMutation = useMutation(fetchRemoveProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries([user.userId]);
    },
  });

  const incrementHandler = () => {
    setQuantity(prevValue => prevValue + 1);
  };

  const decrementHandler = () => {
    if (quantity === 1) return;

    setQuantity(prevValue => prevValue - 1);
  };

  const removeProductHandler = () => {
    removeProductMutation.mutate({
      token: user.token,
      productId: prod.productId._id,
    });
  };
  return (
    <div className='cart__contents'>
      <div className='cart__image-container'>
        <img
          src={prod.productId.imgUrl}
          alt=''
          className='cart__contents-img'
        />
      </div>

      <div className='cart__product-details'>
        <p className='cart__product-name'>{prod.productId.name}</p>

        <p className='cart__product-price'>
          $ {prod.productId.price} x {quantity}
        </p>
        <p className='cart__product-subtotal'>$ {prod.subtotal}</p>

        <div className='cart__product-buttons'>
          <QuantityButton
            incrementHandler={incrementHandler}
            decrementHandler={decrementHandler}
            quantity={prod.quantity ?? 1}
          />
          <CiTrash size={20} onClick={removeProductHandler} />
        </div>
      </div>
    </div>
  );
};

export default CartContents;
