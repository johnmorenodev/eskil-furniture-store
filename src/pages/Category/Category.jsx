import React, { Suspense } from 'react';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';

//REACT COMPONENTS
// import CategoryProducts from './CategoryProducts/CategoryProducts';
const CategoryProducts = React.lazy(() =>
  import('./CategoryProducts/CategoryProducts')
);

const Category = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <CategoryProducts />
    </Suspense>
  );
};

export default Category;
