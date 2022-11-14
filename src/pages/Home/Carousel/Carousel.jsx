//REACT HOOKS
import { useState, useEffect, useRef } from 'react';

//CSS
import './Carousel.css';

//THIRD PARTY
import { motion } from 'framer-motion';

const images = [
  {
    id: 1,
    url: 'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/rev-img-1.jpg',
  },
  {
    id: 2,
    url: 'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/rev-img-2.jpg',
  },
  {
    id: 3,
    url: 'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/rev-img-3.jpg',
  },
  {
    id: 4,
    url: 'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/rev-img-4.jpg',
  },
];
const delay = 4000;

function Carousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const currentImage = images[index];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex(prevIndex =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className='slideshow'>
      <motion.img
        key={index}
        initial={{ scale: 2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        src={currentImage.url}
        className='slideshow__image'
        alt='carousel'
      />
    </div>
  );
}

export default Carousel;
