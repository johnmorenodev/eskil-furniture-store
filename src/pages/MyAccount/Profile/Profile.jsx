//REACT HOOKS
import { useContext } from 'react';

//CSS
import './Profile.css';

//REACT COMPONENTS
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner';
import ShoppingCart from './ShoppingCart/ShoppingCart';

//THIRD PARTY
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

//MISC
import { AuthContext } from '../../../context/authContext';
import { fetchGetProfile } from '../../../utils/api';

const Profile = () => {
  const { user, dispatch } = useContext(AuthContext);
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
      <h1 className='profile__user-name'>Welcome, {userData.user.name}!</h1>
      <div className='profile__cart'>
        <h2 className='profile__shopping-cart'>Shopping Cart</h2>
        {userData.user.cart.length === 0 && (
          <div className='profile__cart-empty'>
            <img
              src='https://store.vigilance.ca/build/images/cart-empty.png'
              alt=''
            />
            <p>Your cart is empty.</p>
            <Link to={'/'}>Shop Now</Link>
          </div>
        )}
        {userData.user.cart.length > 0 && (
          <ShoppingCart userData={userData} user={user} />
        )}
      </div>
    </div>
  );
};

export default Profile;
