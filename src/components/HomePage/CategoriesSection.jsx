import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './CategoriesSection.css';

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/categories');
      const data = await response.json();
      setCategories(data.categories);
    };

    fetchData();
  }, []);

  return (
    <div className='categories'>
      <div className='categories__titles'>
        <p>Search By</p>
        <h3>Categories</h3>
      </div>
      <div className='categories__card-container'>
        {categories.map((category, index) => {
          return (
            <div key={category._id} className='categories__card'>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesSection;
