import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { AuthTextFields } from '../../components';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onPasswordShowClickHandler = () => setShowPassword(!showPassword);

  const onSubmit = async (values: FieldValues) => {
    try {
      setIsSubmitting((prevState) => !prevState);
      // const data = await dispatch(fetchAuth(values));
      setIsSubmitting((prevState) => !prevState);

      console.log('SUBMITTED')


      // if (data.meta.requestStatus === 'rejected') {
      //   await Promise.reject(data.error.message);
      // } else if ('token' in data?.payload) {
      //   window.localStorage.setItem('token', data.payload.token);
      // }
    } catch (err) {
      console.log(err);
      // setError('LoginError', { type: 'custom', message: err });
    }
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthTextFields errors={errors} register={register} showPassword={showPassword}
                        onPasswordShowClickHandler={onPasswordShowClickHandler} />
        <button type='submit' disabled={!isValid || isSubmitting}>
          Войти
        </button>
      </form>
  );
};
