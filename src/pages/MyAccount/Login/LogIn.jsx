//REACT HOOKS
import { useContext } from 'react';

//CSS
import './LogIn.css';

//REACT COMPONENTS
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

//THIRD PARTY
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

//MISC
import { AuthContext } from '../../../context/authContext';
import { fetchLogInRequest } from '../../../utils/api';

const LogInSchema = yup.object({
  email: yup
    .string()
    .required('This field is required.')
    .email('Must be a valid email.'),
  password: yup.string().required('This field is required.'),
});

const LogIn = () => {
  const { dispatch } = useContext(AuthContext);

  const methods = useForm({
    resolver: yupResolver(LogInSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { mutate, isLoading, error } = useMutation(fetchLogInRequest, {
    onSuccess: userData => {
      dispatch({ type: 'LOG_IN', payload: userData });
    },
  });

  const formSubmit = data => {
    mutate(data);
  };

  return (
    <div className='log-in__wrapper'>
      <div className='log-in'>
        <h1>Log In</h1>
        <FormProvider {...methods}>
          <form
            action='/log-in'
            method='POST'
            onSubmit={handleSubmit(formSubmit)}
          >
            <div className='log-in__section'>
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
            <div className='log-in__section'>
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
            <Button>Log In</Button>
          </form>
        </FormProvider>

        <Link to={'/my-account/create-account'}>Create Account</Link>
      </div>
    </div>
  );
};

export default LogIn;
