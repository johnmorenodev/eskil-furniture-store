import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

import './ReviewsForm.css';

const ReviewsForm = ({ productName }) => {
  return (
    <div className='reviews__form'>
      <div className='reviews__form-header'>
        <p className='reviews__form-title'>
          Be the first to review {productName}.
        </p>
        <p className='reviews__form-text'>
          Your email address will not be published. Required fields are marked *
        </p>
      </div>

      <div>
        <form>
          <div className='reviews__comment-container'>
            <label htmlFor='reviews__comment'>Your Comment</label>
            <textarea
              name='reviews__comment'
              id='reviews__comment'
              cols='30'
              rows='10'
              placeholder='Write a review...'
            ></textarea>
          </div>
          <div className='reviews__bottom'>
            <div>
              <label htmlFor='reviews__name'>Your Name</label>
              <Input
                type='text'
                id='reviews__name'
                name='reviews__name'
                placeholder='Your Name *'
              />
            </div>
            <div>
              <label htmlFor='reviews__email'>Your Email</label>
              <Input
                type='email'
                id='reviews__email'
                name='reviews__email'
                placeholder='Your Email *'
              />
            </div>
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ReviewsForm;
