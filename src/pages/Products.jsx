import { useState, useEffect } from 'react';

import AccordionsContainer from '../components/ProductsPage/AccordionsContainer';
import Container from '../components/ProductsPage/Container';
import Main from '../components/ProductsPage/Main';

import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import RelatedProducts from '../components/ProductsPage/RelatedProducts';

import { useQuery } from 'react-query';

const Products = () => {
  const productId = useParams().productId;
  const fetchProducts = async () => {
    const response = await fetch(`http://localhost:3000/products/${productId}`);
    return await response.json();
  };
  const {
    isLoading,
    error,
    data: product,
  } = useQuery(`fetchProducts/${productId}`, fetchProducts);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <h1>An error has occured.</h1>;
  }
  console.log(product);
  return (
    <Container>
      <Main product={product.product} />
      <AccordionsContainer product={product.product} />
      <RelatedProducts product={product.relatedProducts} />
    </Container>
  );
};

export default Products;
