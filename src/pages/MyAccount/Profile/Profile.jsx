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

const getProfile = async id => {
  try {
    const response = await fetch(`http://localhost:3000/user-data/${id}`);
    console.log(id);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const Profile = () => {
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    error,
    data: userData,
  } = useQuery([user.userId], () => getProfile(user.userId));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <h1>Welcome, {userData.user.name}!</h1>;
};

export default Profile;
