//CSS
import './Featured.css';

//REACT COMPONENTS
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner';
import CardWithBorder from '../../../components/shared/CardWithBorder/CardWithBorder';

//THIRD PARTY
import { useQuery } from 'react-query';

//MISC
import { fetchFeaturedProducts } from '../../../utils/api';

const Featured = () => {
  const {
    isLoading,
    error,
    data: featuredProducts,
  } = useQuery('fetchFeatured', fetchFeaturedProducts);

  return (
    <div className='featured'>
      <p>Featured</p>
      <h3>Discover Products</h3>
      {isLoading && <LoadingSpinner />}
      {error && <h1>An error has occured.</h1>}
      {featuredProducts && (
        <div className='featured__card-container'>
          {featuredProducts.map(prod => {
            return <CardWithBorder key={prod._id} prod={prod} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Featured;
