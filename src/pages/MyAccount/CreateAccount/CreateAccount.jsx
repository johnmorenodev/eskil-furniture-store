//REACT HOOKS
import { useContext } from 'react';

//CSS
import './CreateAccount.css';

//REACT COMPONENTS
import Button from '../../../components/UI/Button/Button';
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner';
import Input from '../../../components/UI/Input/Input';

//THIRD PARTY
import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import * as yup from 'yup';

//MISC
import { AuthContext } from '../../../context/authContext';
import { fetchCreateUser } from '../../../utils/api';

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

  const {
    mutate,
    isLoading,
    error,
    data: userData,
  } = useMutation(fetchCreateUser, {
    onSuccess: userData => {
      dispatch({ type: 'LOG_IN', payload: userData });
    },
  });

  const formSubmit = userData => {
    mutate(userData);
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
