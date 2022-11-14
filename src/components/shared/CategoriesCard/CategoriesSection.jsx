//CSS
import './CategoriesSection.css';

//REACT COMPONENTS
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';

//THIRD PARTY
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
  const fetchCategories = async () => {
    const response = await fetch('http://localhost:3000/categories');
    return await response.json();
  };
  const { isLoading, error, data } = useQuery(
    'fetchCategories',
    fetchCategories
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <h1>An error has occured.</h1>;
  }

  return (
    <div className='categories'>
      <div className='categories__titles'>
        <p>Search By</p>
        <h3>Categories</h3>
      </div>
      <div className='categories__card-container'>
        {data.categories.map((category, index) => {
          return (
            <Link
              to={`/category/${category._id}`}
              key={category._id}
              className='categories__card'
            >
              <div className='categories__image-container'>
                <motion.img
                  initial={{ x: -10 }}
                  whileHover={{ x: 0, transition: { duration: 0.4 } }}
                  animate={{ x: -10, transition: { duration: 0.4 } }}
                  src={category.imageUrl}
                  alt={category.categoryName}
                />
              </div>
              <h4>
                {index + 1 < 10 ? '0'.concat(index + 1) : index + 1}
                {' ' + category.categoryName}
              </h4>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesSection;
