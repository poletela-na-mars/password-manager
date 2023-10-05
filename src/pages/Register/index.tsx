import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { StyledTextField, StyledTextFieldProps } from '../../components';

import { RegisterTextFieldsType, RegisterRegisterValType } from '../../@types/auth-types';

import { ReactComponent as LockIcon } from '../../assets/img/lock-icon.svg';

import styles from '../Login/Login.module.scss';

export const Register = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
		defaultValues: {
			email: '',
			password: '',
			passwordRepeat: '',
		},
		mode: 'onChange',
	});

	const onPasswordShowClickHandler = () => setShowPassword(!showPassword);

	const onPasswordRepeatShowClickHandler = () => setShowPasswordRepeat(!showPasswordRepeat);

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

	const textFieldsProps: Record<RegisterRegisterValType, StyledTextFieldProps<RegisterTextFieldsType>> = {
		email: {
			label: 'E-Mail',
			helperText: errors.email?.message,
			register,
			registerVal: 'email',
			registerStr: 'Введите e-mail',
			type: 'email',
			inputProps: { maxLength: 40 },
		},
		password: {
			label: 'Пароль',
			helperText: errors.password?.message,
			register,
			registerVal: 'password',
			registerStr: 'Введите пароль',
			type: 'password',
			inputProps: { maxLength: 40 },
			onPasswordShowClickHandler,
			showPassword,
		},
		passwordRepeat: {
			label: 'Повторите пароль',
			helperText: errors.passwordRepeat?.message,
			register,
			registerVal: 'passwordRepeat',
			registerStr: 'Введите пароль еще раз',
			type: 'password',
			inputProps: { maxLength: 40 },
			onPasswordShowClickHandler: onPasswordRepeatShowClickHandler,
			showPassword: showPasswordRepeat,
		}
	};

	return (
		<div className={styles.root}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<LockIcon width={38} height={38} />
				<h2>Регистрация в SafeBox</h2>

				<StyledTextField {...textFieldsProps.email} />
				<StyledTextField {...textFieldsProps.password} />
				<StyledTextField {...textFieldsProps.passwordRepeat} />

				<Link to='/login' className={styles.regOrLogLink}>Войти</Link>
				<button className={styles.loginButton} type='submit' disabled={!isValid || isSubmitting}>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
