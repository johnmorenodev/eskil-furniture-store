import React from 'react';

import AddInfoAccordion from './AddInfoAccordion';
import DescriptionAccordion from './DescriptionAccordion';
import ReviewsAccordion from './ReviewsAccordion';

const AccordionsContainer = ({ product }) => {
  return (
    <div>
      <DescriptionAccordion product={product} />
      <AddInfoAccordion product={product} />
      <ReviewsAccordion />
    </div>
  );
};

export default AccordionsContainer;
