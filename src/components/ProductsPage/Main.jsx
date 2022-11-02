import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import './Main.css';

const Main = ({ product }) => {
  return (
    <>
      <div>
        <div className='product__main'>
          <img
            src={product.imgUrl}
            alt={product.name}
            className='product__image'
          />
          <div className='product__main-details'>
            <h1 className='product__name'>{product.name}</h1>
            <p className='product__price'>${product.price}</p>
            <p className='product__short'>{product.shortDescription}</p>
            <div className='product__button-container'>
              <div className='product__button-quantity'>
                <button>–</button>
                <p>1</p>
                <button>+</button>
              </div>
              <button className='product__button-cart'>Add To Cart</button>
            </div>
            <p className='product__wishlist'>Add to Wishlist</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
