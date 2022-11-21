import React, { Suspense } from 'react';

//REACT COMPONENTS
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';

const Carousel = React.lazy(() => import('./Carousel/Carousel'));
const Featured = React.lazy(() => import('./Featured/Featured'));
const CategoriesSection = React.lazy(() =>
  import('../../components/shared/CategoriesCard/CategoriesSection')
);
// import Carousel from './Carousel/Carousel';
// import Featured from './Featured/Featured';
// import CategoriesSection from '../../components/shared/CategoriesCard/CategoriesSection';

const Home = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Carousel />
      <Featured />
      <CategoriesSection />
    </Suspense>
  );
};

export default Home;
