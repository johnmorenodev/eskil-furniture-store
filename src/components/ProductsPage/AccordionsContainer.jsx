import React from 'react';
import AddInfoAccordion from './AddInfoAccordion';

import DescriptionAccordion from './DescriptionAccordion';

const AccordionsContainer = ({ product }) => {
  return (
    <>
      <DescriptionAccordion product={product} />
      <AddInfoAccordion product={product} />
    </>
  );
};

export default AccordionsContainer;
