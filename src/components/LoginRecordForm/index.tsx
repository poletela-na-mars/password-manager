// TODO - logic for buttons near password field

import { IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';

import { ReactComponent as VerifyIcon } from '../../assets/img/verify-icon.svg';
import { ReactComponent as GenerateIcon } from '../../assets/img/generate-icon.svg';
import { ReactComponent as VisibilityOffIcon } from '../../assets/img/visibility-off-icon.svg';
import { ReactComponent as VisibilityIcon } from '../../assets/img/visibility-icon.svg';

import styles from '../../pages/AddRecord/AddRecord.module.scss';

interface LoginRecordFormProps {
	showPassword: boolean;
	passwordShowClickHandler: () => void;
}

export const LoginRecordForm = ({ showPassword, passwordShowClickHandler }: LoginRecordFormProps) => {
	return (
		<>
			<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
			           label='Название' placeholder='Новая запись' required
			           InputLabelProps={{
				           shrink: true,
			           }} />

			<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
			           label='Имя пользователя' placeholder='Имя пользователя или логин' required
			           InputLabelProps={{
				           shrink: true,
			           }} />

			<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
			           label='Пароль' placeholder='Пароль' required
			           type={showPassword ? 'text' : 'password'}
			           InputProps={{
				           endAdornment:
					           <InputAdornment sx={{ marginBottom: '14px' }} position='end'>
						           <Tooltip title='Безопасность пароля'>
							           <IconButton onClick={() => {
							           }}>
								           <VerifyIcon />
							           </IconButton>
						           </Tooltip>
						           <IconButton onClick={passwordShowClickHandler}>
							           {showPassword ? <VisibilityOffIcon className={styles.visibilityIcon} /> :
								           <VisibilityIcon className={styles.visibilityIcon} />}
						           </IconButton>
						           <IconButton onClick={() => {
						           }}>
							           <GenerateIcon />
						           </IconButton>
					           </InputAdornment>
			           }}
			           InputLabelProps={{
				           shrink: true,
			           }} />

			<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
			           label='URI' placeholder='https://...'
			           InputLabelProps={{
				           shrink: true,
			           }} />
		</>
	);
};
