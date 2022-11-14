//REACT HOOKS
import { useState } from 'react';

//CSS
import './ReviewsAccordion.css';

//REACT COMPONENTS
import Accordion from '../../../components/UI/Accordion/Accordion';
import ReviewsForm from '../ReviewsForm/ReviewsForm';

const DescriptionAccordion = ({ product }) => {
  const [reviews, setReviews] = useState(null);

  return (
    <Accordion text={'Reviews'}>
      {reviews && (
        <div>
          <p className='description__paragraph'>{product.longDescription}</p>
          {Object.keys(product.details).map(key => {
            // converts key camelCase to Title Case
            const result = key.replace(/([A-Z])/g, ' $1');
            const transformedKey =
              result.charAt(0).toUpperCase() + result.slice(1);

            return (
              <p key={key}>
                {transformedKey}: {product.details[key]}
              </p>
            );
          })}
        </div>
      )}
      <ReviewsForm productName={'TEST'} />
    </Accordion>
  );
};

export default DescriptionAccordion;
