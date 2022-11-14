//REACT COMPONENTS
import AddInfoAccordion from '../AddInfoAccordion/AddInfoAccordion';
import DescriptionAccordion from '../DescriptionAccordion/DescriptionAccordion';
import ReviewsAccordion from '../ReviewsAccordion/ReviewsAccordion';

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
