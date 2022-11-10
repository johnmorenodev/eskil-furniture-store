import { useState, useEffect } from 'react';

import LoadingSpinner from '../shared/LoadingSpinner';

import { motion } from 'framer-motion';
import { HiOutlineEye, HiOutlineHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import './Featured.css';
import CardWithBorder from '../shared/CardWithBorder';

import { useQuery } from 'react-query';

const Featured = () => {
  const fetchFeatured = async () => {
    const response = await fetch('http://localhost:3000/featured');
    return await response.json();
  };
  const { isLoading, error, data } = useQuery('fetchFeatured', fetchFeatured);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <h1>An error has occured.</h1>;
  }

  return (
    <div className='featured'>
      <p>Featured</p>
      <h3>Discover Products</h3>
      <div className='featured__card-container'>
        {data.map(prod => {
          return <CardWithBorder key={prod._id} prod={prod} />;
        })}
      </div>
    </div>
  );
};

export default Featured;
