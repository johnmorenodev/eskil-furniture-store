import React from 'react';

import Carousel from '../components/HomePage/Carousel';
import Featured from '../components/HomePage/Featured';
import CategoriesSection from '../components/HomePage/CategoriesSection';
import NewsLetterSection from '../components/HomePage/NewsLetterSection';
import FooterSection from '../components/HomePage/FooterSection';

const Home = () => {
  return (
    <>
      <Carousel />
      <Featured />
      <CategoriesSection />
      <NewsLetterSection />
      <FooterSection />
    </>
  );
};

export default Home;
