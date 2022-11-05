import { useState, useEffect } from 'react';

import LoadingSpinner from '../shared/LoadingSpinner';

import { motion } from 'framer-motion';
import { HiOutlineEye, HiOutlineHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import './Featured.css';
import CardWithBorder from '../shared/CardWithBorder';

const Featured = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/featured');
      const data = await response.json();
      console.log(data);
      setFeaturedProducts(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className='featured'>
      <p>Featured</p>
      <h3>Discover Products</h3>
      <div className='featured__card-container'>
        {isLoading && <LoadingSpinner />}
        {!isLoading &&
          featuredProducts.map(prod => {
            return <CardWithBorder prod={prod} />;
          })}
      </div>
    </div>
  );
};

export default Featured;
