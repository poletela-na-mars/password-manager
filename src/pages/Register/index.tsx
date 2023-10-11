import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsAuth } from '../../redux/auth/selectors';
import { fetchRegister } from '../../redux/auth/asyncActions';
import { AppDispatch } from '../../redux/store';

import { StyledTextField, StyledTextFieldProps } from '../../components';

import { RegisterRegisterValType, RegisterTextFieldsType, ServerErrorRegisterType } from '../../@types/auth-types';

import { ReactComponent as LockIcon } from '../../assets/img/lock-icon.svg';

import styles from '../Login/Login.module.scss';

export const Register = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const dispatch = useDispatch<AppDispatch>();
	const isAuth = useSelector(selectIsAuth);

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

	if (isAuth) {
		return <Navigate to='/' />;
	}

	const onSubmit = async (values: RegisterTextFieldsType) => {
		try {
			setIsSubmitting((prevState) => !prevState);
			// TODO - type
			const data: any = await dispatch(fetchRegister(values));
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
				? [...parsedErrs].forEach((e: ServerErrorRegisterType) => setError(e.path, { type: 'custom', message: e.msg }))
				: setError(parsedErrs.path, { type: 'custom', message: parsedErrs.msg });
		}
	};

	const textFieldsProps: Record<RegisterRegisterValType, StyledTextFieldProps<RegisterTextFieldsType>> = {
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
		},
		passwordRepeat: {
			label: 'Повторите пароль',
			helperText: errors.passwordRepeat?.message,
			error: Boolean(errors.passwordRepeat?.message),
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
			<form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
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
