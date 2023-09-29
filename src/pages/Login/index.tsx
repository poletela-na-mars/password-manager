import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { AuthTextFields } from '../../components';
import { ReactComponent as LockIcon } from '../../assets/img/lock-icon.svg';

import styles from '../../scss/pages/Login.module.scss';

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
      <div className={styles.root}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LockIcon width={38} height={38} />
          <h2>Вход в SafeBox</h2>
          <AuthTextFields errors={errors} register={register} showPassword={showPassword}
                          onPasswordShowClickHandler={onPasswordShowClickHandler} />
          {/*TODO - link to register page*/}
          <a className={styles.regOrLogLink}>Зарегистрироваться</a>
          <button className={styles.loginButton} type='submit' disabled={!isValid || isSubmitting}>
            Войти
          </button>
        </form>
      </div>
  );
};
