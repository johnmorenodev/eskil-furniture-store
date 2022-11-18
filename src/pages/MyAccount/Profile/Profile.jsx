//REACT HOOKS
import { useContext } from 'react';

//CSS
import './Profile.css';

//REACT COMPONENTS
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner';

//THIRD PARTY
import { useQuery } from 'react-query';

//MISC
import { AuthContext } from '../../../context/authContext';
import { fetchGetProfile } from '../../../utils/api';
import CartContents from './CartContents/CartContents';

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
        <div className='profile__cart-items'>
          {userData.user.cart &&
            userData.user.cart.map(prod => {
              return (
                <CartContents
                  key={prod.productId._id}
                  prod={prod}
                  user={user}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
