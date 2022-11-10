import React from 'react';
import Input from '../UI/Input';

import './LogIn.css';

import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '../UI/Button';

const LogInSchema = yup.object({
  email: yup
    .string()
    .required('Email is Required.')
    .email('Must be a valid email.'),
  password: yup
    .string()
    .required('Password is required.')
    .min(8)
    .matches(/(?=.*[A-Z])/, 'Must have one uppercase character.')
    .matches(/(?=.*\d)/, 'Must have one number.'),
});

const LogIn = () => {
  const methods = useForm({
    resolver: yupResolver(LogInSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const formSubmit = data => {
    console.log(data);
  };

  return (
    <div className='log-in'>
      <h1>Log In</h1>
      <FormProvider {...methods}>
        <form action='/log-in' onSubmit={handleSubmit(formSubmit)}>
          <div className='log-in__section'>
            <label htmlFor='email'>Email</label>
            <Input type='email' id='email' name='email' />
            <p>{errors.email?.message}</p>
          </div>
          <div className='log-in__section'>
            <label htmlFor='password'>Password</label>
            <Input type='password' id='password' name='password' />
            <p>{errors.password?.message}</p>
          </div>
          <Button>Log In</Button>
        </form>
      </FormProvider>

      <Link>Create Account</Link>
    </div>
  );
};

export default LogIn;
