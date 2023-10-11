import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { fetchLogin } from '../../redux/auth/asyncActions';
import { AppDispatch } from '../../redux/store';
import { selectIsAuth } from '../../redux/auth/selectors';

import { StyledTextField, StyledTextFieldProps } from '../../components';

import { ReactComponent as LockIcon } from '../../assets/img/lock-icon.svg';

import {
	AuthTextFieldsType,
	LoginRegisterValType,
	ServerErrorLoginType,
} from '../../@types/auth-types';

import styles from './Login.module.scss';

export const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const dispatch = useDispatch<AppDispatch>();
	const isAuth = useSelector(selectIsAuth);

	const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange',
	});

	const onPasswordShowClickHandler = () => setShowPassword(!showPassword);

	if (isAuth) {
		return <Navigate to='/' />;
	}

	console.log(errors)

	const onSubmit = async (values: FieldValues) => {
		try {
			setIsSubmitting((prevState) => !prevState);
			// TODO - type
			const data: any = await dispatch(fetchLogin(values));
			setIsSubmitting((prevState) => !prevState);

			console.log(data)

			if (data.meta.requestStatus === 'rejected') {
				await Promise.reject(data.error.message);
			} else if ('token' in data?.payload) {
				window.localStorage.setItem('token', data.payload.token);
			}
		} catch (err) {
			const parsedErrs = JSON.parse(err as string);
			console.log(parsedErrs);

			Array.isArray(parsedErrs)
				? [...parsedErrs].forEach((e: ServerErrorLoginType) => setError(e.path, { type: 'custom', message: e.msg }))
				: setError(parsedErrs.path, { type: 'custom', message: parsedErrs.msg });
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

	// to display not valid email/password error in only password's helperText, but other errors in a common way
	if (textFieldsProps.email.registerStr !== textFieldsProps.email.helperText) textFieldsProps.email.helperText = undefined;

	return (
		<div className={styles.root}>
			<form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
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
