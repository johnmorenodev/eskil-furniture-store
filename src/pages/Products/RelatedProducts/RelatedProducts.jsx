//CSSS
import './RelatedProducts.css';

//REACT COMPONENTS
import CardWithBorder from '../../../components/shared/CardWithBorder/CardWithBorder';

const RelatedProducts = ({ product }) => {
  return (
    <div className='relatedProducts'>
      <h3>Related Products</h3>
      <div className='relatedProducts__container'>
        {product.map(prod => {
          return <CardWithBorder key={prod._id} prod={prod} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
