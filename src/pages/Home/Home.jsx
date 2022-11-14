//REACT COMPONENTS
import Carousel from './Carousel/Carousel';
import Featured from './Featured/Featured';
import CategoriesSection from '../../components/shared/CategoriesCard/CategoriesSection';

const Home = () => {
  return (
    <>
      <Carousel />
      <Featured />
      <CategoriesSection />
    </>
  );
};

export default Home;
