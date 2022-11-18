//REACT HOOKS
import { useContext, useState } from 'react';

//CSS
import './Main.css';

//REACT COMPONENTS
import Button from '../../../components/UI/Button/Button';

//THIRD PARTY
import { useMutation } from 'react-query';

//MISC
import { fetchAddProductToCart } from '../../../utils/api';
import { AuthContext } from '../../../context/authContext';
import QuantityButton from '../../../components/UI/Button/QuantityButton/QuantityButton';

const Main = ({ product }) => {
  const { user } = useContext(AuthContext);

  const [quantity, setQuantity] = useState(1);

  const incrementHandler = () => {
    setQuantity(prevValue => prevValue + 1);
  };

  const decrementHandler = () => {
    if (quantity === 1) return;
    setQuantity(prevValue => prevValue - 1);
  };

  const { mutate, isLoading, error, data } = useMutation(
    fetchAddProductToCart,
    {
      onSuccess: data => {
        console.log(data);
      },
    }
  );

  const addToCartHandler = data => {
    mutate(data);
  };
  return (
    <>
      <div>
        <div className='product__main'>
          <img
            src={product.imgUrl}
            alt={product.name}
            className='product__image'
          />
          <div className='product__main-details'>
            <h1 className='product__name'>{product.name}</h1>
            <p className='product__price'>${product.price}</p>
            <p className='product__short'>{product.shortDescription}</p>
            <div className='product__button-container'>
              <QuantityButton
                className={'button__quantity'}
                quantity={quantity}
                incrementHandler={incrementHandler}
                decrementHandler={decrementHandler}
              />

              <Button
                onClick={() =>
                  addToCartHandler({
                    quantity,
                    productId: product._id,
                    token: user.token,
                  })
                }
              >
                Add To Cart
              </Button>
            </div>
            <p className='product__wishlist'>Add to Wishlist</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
