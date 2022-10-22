import React from 'react';
import { motion } from 'framer-motion';

import './CategoriesSection.css';

const DUMMY_CATEGORIES = [
  {
    id: 1,
    categoryName: 'Chairs',
    imageUrl:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-01.jpg',
  },
  {
    id: 2,
    categoryName: 'Sofas',
    imageUrl:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-02.jpg',
  },
  {
    id: 3,
    categoryName: 'Pendants',
    imageUrl:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-03.jpg',
  },
  {
    id: 4,
    categoryName: 'Home Decor',
    imageUrl:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-04.jpg',
  },
  {
    id: 5,
    categoryName: 'Coffee Tables',
    imageUrl:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-05.jpg',
  },
  {
    id: 6,
    categoryName: 'Lamps',
    imageUrl:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-06.jpg',
  },
];

const CategoriesSection = () => {
  return (
    <div className='categories'>
      <div className='categories__titles'>
        <p>Search By</p>
        <h3>Categories</h3>
      </div>
      <div className='categories__card-container'>
        {DUMMY_CATEGORIES.map((category, index) => {
          return (
            <div key={category.id} className='categories__card'>
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
