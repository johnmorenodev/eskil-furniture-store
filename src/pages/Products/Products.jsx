//REACT COMPONENTS
import AccordionsContainer from './AccordionsContainer/AccordionsContainer';
import Container from './Container/Container';
import Main from './Main/Main';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import RelatedProducts from './RelatedProducts/RelatedProducts';

//THIRD PARTY
import { useParams } from 'react-router-dom';
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
