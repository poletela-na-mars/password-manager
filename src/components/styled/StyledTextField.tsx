import { Path, UseFormRegister } from 'react-hook-form';

import { IconButton, InputAdornment, InputBaseComponentProps, TextField } from '@mui/material';

import { AuthTextFieldsType, RegisterTextFieldsType } from '../../@types/auth-types';

import styles from '../AuthTextFields/AuthTextFields.module.scss';

import { ReactComponent as VisibilityOffIcon } from '../../assets/img/visibility-off-icon.svg';
import { ReactComponent as VisibilityIcon } from '../../assets/img/visibility-icon.svg';

export type StyledTextFieldProps<T extends AuthTextFieldsType | RegisterTextFieldsType> = {
  label: string;
  helperText: string | undefined;
  register: UseFormRegister<T>;
  registerVal: Path<T>;
  registerStr: string;
  type: string;
  inputProps: InputBaseComponentProps;
  showPassword?: boolean;
  onPasswordShowClickHandler?: () => void;
};

export const StyledTextField = <T extends AuthTextFieldsType | RegisterTextFieldsType>({
	label,
	helperText,
	register,
	registerVal,
	registerStr,
	type,
	inputProps,
	onPasswordShowClickHandler,
	showPassword
}: StyledTextFieldProps<T>) => {
	let IP;
	if (registerVal.includes('password')) {
		IP = {
			endAdornment:
        <InputAdornment position='end'>
        	<IconButton onClick={onPasswordShowClickHandler}>
        		{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        	</IconButton>
        </InputAdornment>
		};
		type = showPassword ? 'text' : 'password';
	}

	return <TextField
		className={styles.field}
		margin='dense'
		label={label}
		fullWidth
		// error={Boolean(errors.LoginError?.message)}
		helperText={helperText}
		{...register(registerVal, { required: registerStr })}
		type={type}
		inputProps={inputProps}
		InputProps={{ sx: { borderRadius: 30 }, ...IP }}
		required={true}
		autoComplete={'on'}
	/>
};
