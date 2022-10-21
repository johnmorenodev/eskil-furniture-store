import React from 'react';

import Carousel from '../components/HomePage/Carousel';
import Featured from '../components/HomePage/Featured';
import CategoriesSection from '../components/HomePage/CategoriesSection';

const Home = () => {
  return (
    <>
      <Carousel />
      <Featured />
      <CategoriesSection />
    </>
  );
};

export default Home;
