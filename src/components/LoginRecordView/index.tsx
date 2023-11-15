import { IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';

import { Login } from '../../@types/basic-types';

import { copyContent } from '../../utils/copyContent';

import { ReactComponent as VerifyIcon } from '../../assets/img/verify-icon.svg';
import { ReactComponent as CopyIcon } from '../../assets/img/copy-icon.svg';
import { ReactComponent as VisibilityOffIcon } from '../../assets/img/visibility-off-icon.svg';
import { ReactComponent as VisibilityIcon } from '../../assets/img/visibility-icon.svg';

interface LoginRecordViewProps {
	showPassword: boolean;
	passwordShowClickHandler: () => void;
	record: Login;
}

export const LoginRecordView = ({ showPassword, passwordShowClickHandler, record }: LoginRecordViewProps) => {
	return (
		<>
			<TextField
				label='Имя пользователя'
				defaultValue={record.name}
				InputProps={{
					readOnly: true,
					endAdornment:
						<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
							<IconButton onClick={() => copyContent(record.name)}>
								<CopyIcon />
							</IconButton>
						</InputAdornment>
				}}
				variant='standard'
			/>
			<TextField
				label='Пароль'
				defaultValue={record.password}
				type={showPassword ? 'text' : 'password'}
				InputProps={{
					readOnly: true,
					endAdornment:
						<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
							<Tooltip title='Безопасность пароля'>
								<IconButton onClick={() => {
								}}>
									<VerifyIcon />
								</IconButton>
							</Tooltip>
							<IconButton onClick={passwordShowClickHandler}>
								{showPassword ? <VisibilityOffIcon /> :
									<VisibilityIcon />}
							</IconButton>
							<IconButton onClick={() => copyContent(record.password)}>
								<CopyIcon />
							</IconButton>
						</InputAdornment>
				}}
				variant='standard'
			/>
			{
				record.uri &&
				<TextField
					label='URI'
					defaultValue={record.uri}
					InputProps={{
						readOnly: true,
						endAdornment:
							<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
								<IconButton onClick={() => copyContent(record.uri!)}>
									<CopyIcon />
								</IconButton>
							</InputAdornment>
					}}
					variant='standard'
				/>
			}
		</>
	);
};
