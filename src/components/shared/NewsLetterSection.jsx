import React from 'react';

import './NewsLetterSection.css';

import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Input from '../UI/Input';

const NewsLetterSection = () => {
  return (
    <div className='news-letter'>
      <div className='news-letter__container'>
        <p className='news-letter__paragraph'>
          Subscribe to our newsletter and receive the latest product news,
          stories, invitations to exclusive design events and much, much more.
        </p>
        <div className='news-letter__input'>
          <Input type='email' placeholder='Enter Email Address' />
          <div className='news-letter__button-container'>
            <button className='news-letter__button'>
              <p>Subscribe</p>
              <HiOutlineArrowNarrowRight
                className='news-letter__icon'
                size={18}
              />
            </button>
          </div>
        </div>
        <p className='news-letter__accept-policy'>
          By subscribing, you accept our{' '}
          <span>
            <a href='#'>privacy policy</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default NewsLetterSection;
