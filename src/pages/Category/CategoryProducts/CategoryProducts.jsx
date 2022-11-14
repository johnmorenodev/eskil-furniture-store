//CSS
import './CategoryProducts.css';

//REACT COMPONENTS
import CardWithBorder from '../../../components/shared/CardWithBorder/CardWithBorder';
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner';
import CategoriesSection from '../../../components/shared/CategoriesCard/CategoriesSection';

//THIRD PARTY
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const CategoryProducts = () => {
  const categoryId = useParams().categoryId;

  const fetchProductsInCategories = async () => {
    const response = await fetch(
      `http://localhost:3000/category/${categoryId}`
    );
    return await response.json();
  };

  const {
    isLoading,
    error,
    data: categoryProducts,
  } = useQuery(
    `fetchProductsInCategories/${categoryId}`,
    fetchProductsInCategories
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>An error has occured.</p>;
  }

  return (
    <>
      <div className='category__products'>
        <h1>All Products</h1>
        <div className='category__products-cards'>
          {categoryProducts.products.map(prod => {
            return <CardWithBorder key={prod._id} prod={prod} />;
          })}
        </div>
      </div>
      <CategoriesSection />
    </>
  );
};

export default CategoryProducts;
