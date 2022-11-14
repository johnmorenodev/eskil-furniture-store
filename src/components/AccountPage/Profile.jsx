import React from 'react';

import './Profile.css';

import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { useQuery } from 'react-query';
import LoadingSpinner from '../shared/LoadingSpinner';

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
