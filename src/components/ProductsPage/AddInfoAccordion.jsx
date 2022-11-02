import { useState } from 'react';

import Accordion from '../UI/Accordion';

import './AddInfoAccordion.css';

const AddInfoAccordion = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHander = () => {
    setIsOpen(prevValue => !prevValue);
    console.log(isOpen);
  };
  return (
    <Accordion
      text={'Additional Information'}
      onClickHander={onClickHander}
      isOpen={isOpen}
    >
      {isOpen && (
        <div className='addInfo'>
          {Object.keys(product.addInfo).map(key => {
            // converts key camelCase to Title Case
            const result = key.replace(/([A-Z])/g, ' $1');
            const transformedKey =
              result.charAt(0).toUpperCase() + result.slice(1);

            return (
              <p key={key}>
                {transformedKey}: {product.addInfo[key]}
              </p>
            );
          })}
        </div>
      )}
    </Accordion>
  );
};

export default AddInfoAccordion;
