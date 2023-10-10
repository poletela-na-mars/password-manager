import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { StyledTextField, StyledTextFieldProps } from '../../components';
import { ReactComponent as LockIcon } from '../../assets/img/lock-icon.svg';

import { AuthTextFieldsType, LoginRegisterValType } from '../../@types/auth-types';

import styles from './Login.module.scss';

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

	const textFieldsProps: Record<LoginRegisterValType, StyledTextFieldProps<AuthTextFieldsType>> = {
		email: {
			label: 'E-Mail',
			helperText: errors.email?.message,
			error: Boolean(errors.email?.message),
			register,
			registerVal: 'email',
			registerStr: 'Введите e-mail',
			type: 'email',
			inputProps: { maxLength: 40 },
		},
		password: {
			label: 'Пароль',
			helperText: errors.password?.message,
			error: Boolean(errors.password?.message),
			register,
			registerVal: 'password',
			registerStr: 'Введите пароль',
			type: 'password',
			inputProps: { maxLength: 40 },
			onPasswordShowClickHandler,
			showPassword,
		}
	};

	return (
		<div className={styles.root}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<LockIcon width={38} height={38} />
				<h2>Вход в SafeBox</h2>

				<StyledTextField {...textFieldsProps.email} />
				<StyledTextField {...textFieldsProps.password} />

				<Link to='/register' className={styles.regOrLogLink}>Зарегистрироваться</Link>
				<button className={styles.loginButton} type='submit' disabled={!isValid || isSubmitting}>
					Войти
				</button>
			</form>
		</div>
	);
};
