//CSS
import './CategoryProducts.css';

//REACT COMPONENTS
import CardWithBorder from '../../../components/shared/CardWithBorder/CardWithBorder';
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner';
import CategoriesSection from '../../../components/shared/CategoriesCard/CategoriesSection';

//THIRD PARTY
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

//MISC
import { fetchProductsCategoryById } from '../../../utils/api';

const CategoryProducts = () => {
  const categoryId = useParams().categoryId;

  const {
    isLoading,
    error,
    data: cateogry,
  } = useQuery(categoryId, () => fetchProductsCategoryById(categoryId));

  return (
    <>
      <div className='category__products'>
        <h1>All Products</h1>
        {isLoading && <LoadingSpinner />}
        {error && <h1>An error has occured.</h1>}
        {cateogry && (
          <div className='category__products-cards'>
            {cateogry.products.map(prod => {
              return <CardWithBorder key={prod._id} prod={prod} />;
            })}
          </div>
        )}
      </div>
      <CategoriesSection />
    </>
  );
};

export default CategoryProducts;
