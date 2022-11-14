//CSS
import './DescriptionAccordion.css';

//REACT COMPONENTS
import Accordion from '../../../components/UI/Accordion/Accordion';

const DescriptionAccordion = ({ product }) => {
  return (
    <Accordion text={'Description'}>
      <div
        initial='collapsed'
        animate='open'
        exit='collapsed'
        variants={{
          open: { height: 'auto', overflow: 'none' },
          collapsed: { height: 0, overflow: 'hidden' },
        }}
        transition={{ duration: 0.3, ease: 'easeIn' }}
      >
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
      </div>
    </Accordion>
  );
};

export default DescriptionAccordion;
