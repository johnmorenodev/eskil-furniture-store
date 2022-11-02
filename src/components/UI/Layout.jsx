import React from 'react';

import Header from '../shared/Header';
import NewsLetterSection from '../shared/NewsLetterSection';
import FooterSection from '../shared/FooterSection';

import { Outlet } from 'react-router-dom';
import Wrapper from './Wrapper';

const Layout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
        <NewsLetterSection />
        <FooterSection />
      </Wrapper>
    </>
  );
};

export default Layout;
