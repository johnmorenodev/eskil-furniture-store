//REACT COMPONENTS
import AccordionsContainer from './AccordionsContainer/AccordionsContainer';
import Container from './Container/Container';
import Main from './Main/Main';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import RelatedProducts from './RelatedProducts/RelatedProducts';

//THIRD PARTY
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

//MISC
import { fetchProductById } from '../../utils/api';

const Products = () => {
  const { productId } = useParams();
  const {
    isLoading,
    error,
    data: product,
  } = useQuery(productId, () => fetchProductById(productId));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <h1>An error has occured.</h1>;
  }

  if (product) {
    return (
      <Container>
        <Main product={product.product} />
        <AccordionsContainer product={product.product} />
        <RelatedProducts product={product.relatedProducts} />
      </Container>
    );
  }
};

export default Products;
