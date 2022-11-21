//REACT HOOKS
import React, { useContext, Suspense } from 'react';

//CSS
import './Profile.css';

//REACT COMPONENTS
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner';

//THIRD PARTY
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

//MISC
import { AuthContext } from '../../../context/authContext';
import { fetchGetProfile } from '../../../utils/api';

// import ShoppingCart from './ShoppingCart/ShoppingCart';
const ShoppingCart = React.lazy(() => import('./ShoppingCart/ShoppingCart'));

const Profile = () => {
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    error,
    data: userData,
  } = useQuery([user.userId], () => fetchGetProfile(user.userId, user.token));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className='profile'>
      <h1 className='profile__user-name'>Welcome, {userData.name}!</h1>
      <div className='profile__cart'>
        <h2 className='profile__shopping-cart'>Shopping Cart</h2>
        {userData.cart.length === 0 && (
          <div className='profile__cart-empty'>
            <img
              src='https://store.vigilance.ca/build/images/cart-empty.png'
              alt=''
            />
            <p>Your cart is empty.</p>
            <Link to={'/'}>Shop Now</Link>
          </div>
        )}
        {userData.cart.length > 0 && (
          <Suspense fallback={<LoadingSpinner />}>
            <ShoppingCart userData={userData} user={user} />
          </Suspense>
        )}
        <Link to={'order-history'} className='profile__order'>
          My Order History
        </Link>
      </div>
    </div>
  );
};

export default Profile;
