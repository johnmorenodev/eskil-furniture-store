import React, { useContext } from 'react';
import Input from '../UI/Input';

import './CreateAccount.css';

import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '../UI/Button';
import LoadingSpinner from '../shared/LoadingSpinner';
import { useMutation } from 'react-query';
import { AuthContext } from '../context/authContext';

const CreateAccountSchema = yup.object({
  username: yup.string('test').required('This field is required.'),
  email: yup
    .string('test')
    .required('This field is required.')
    .email('Must be a valid email.'),
  password: yup
    .string('test')
    .required('This field is required.')
    .min(8, 'Must have at least 8 characters.')
    .matches(/(?=.*[A-Z])/, 'Must have one uppercase character.')
    .matches(/(?=.*\d)/, 'Must have one number.'),
  confirm: yup
    .string('test')
    .required('This field is required.')
    .oneOf([yup.ref('password'), null], 'Password does not match.'),
});

const postUser = async data => {
  try {
    const res = await fetch('http://localhost:3000/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const CreateAccount = () => {
  const { dispatch } = useContext(AuthContext);

  const methods = useForm({
    resolver: yupResolver(CreateAccountSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { mutate, isLoading, error, data } = useMutation(postUser, {
    onSuccess: userData => {
      localStorage.setItem('user', JSON.stringify(userData));
      dispatch({ type: 'LOG_IN', payload: userData });
    },
  });

  const formSubmit = data => {
    mutate(data);
  };

  return (
    <div className='create-account'>
      <h1>Create Account</h1>
      <FormProvider {...methods}>
        <form
          action='/sign-up'
          method='POST'
          onSubmit={handleSubmit(formSubmit)}
        >
          <div className='create-account__section'>
            <label htmlFor='username'>Name</label>
            <Input
              type='text'
              id='username'
              name='username'
              validation={true}
              register={register}
            />
            <p>{errors.username?.message}</p>
          </div>
          <div className='create-account__section'>
            <label htmlFor='email'>Email</label>
            <Input
              type='email'
              id='email'
              name='email'
              validation={true}
              register={register}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className='create-account__section'>
            <label htmlFor='password'>Password</label>
            <Input
              type='password'
              id='password'
              name='password'
              validation={true}
              register={register}
            />
            <p>{errors.password?.message}</p>
          </div>
          <div className='create-account__section'>
            <label htmlFor='confirm'>Confirm Password</label>
            <Input
              type='password'
              id='confirm'
              name='confirm'
              validation={true}
              register={register}
            />
            <p>{errors.confirm?.message}</p>
          </div>
          {isLoading && <LoadingSpinner size={50} />}
          {!isLoading && <Button>Create Account</Button>}
        </form>
      </FormProvider>

      <Link to={'/my-account/log-in'}>Log In</Link>
    </div>
  );
};

export default CreateAccount;
