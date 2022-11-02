import { useState, useEffect } from 'react';

import AccordionsContainer from '../components/ProductsPage/AccordionsContainer';
import Container from '../components/ProductsPage/Container';
import Main from '../components/ProductsPage/Main';

import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/shared/LoadingSpinner';

const Products = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const productId = useParams().productId;

  useEffect(() => {
    async function getProduct() {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:3000/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
    }

    getProduct();
  }, [productId]);

  return (
    <Container>
      {isLoading && <LoadingSpinner />}
      {!isLoading && <Main product={product} />}
      {!isLoading && <AccordionsContainer product={product} />}
    </Container>
  );
};

export default Products;
