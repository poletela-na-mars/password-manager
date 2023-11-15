import { IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';

import { Card } from '../../@types/basic-types';

import { copyContent } from '../../utils/copyContent';

import { ReactComponent as VerifyIcon } from '../../assets/img/verify-icon.svg';
import { ReactComponent as CopyIcon } from '../../assets/img/copy-icon.svg';
import { ReactComponent as VisibilityOffIcon } from '../../assets/img/visibility-off-icon.svg';
import { ReactComponent as VisibilityIcon } from '../../assets/img/visibility-icon.svg';

interface CardRecordViewProps {
	record: Card;
	showCardNum: boolean;
	showCardNumClickHandler: () => void;
	showCVC: boolean;
	showCVCClickHandler: () => void;
	showExpDate: boolean;
	showExpDateClickHandler: () => void;
}

// TODO - logic for verify button (card)

export const CardRecordView = ({
	                               showCardNum,
	                               showCardNumClickHandler,
	                               showCVC,
	                               showCVCClickHandler,
	                               showExpDate,
	                               showExpDateClickHandler,
	                               record
}: CardRecordViewProps) => {
	return (
		<>
			{
				record.name &&
				<TextField
					label='Имя владельца'
					defaultValue={record.name}
					InputProps={{
						readOnly: true,
						endAdornment:
							<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
								<IconButton onClick={() => copyContent(record.name!)}>
									<CopyIcon />
								</IconButton>
							</InputAdornment>
					}}
					variant='standard'
				/>
			}

			<TextField
				label='Номер карты'
				defaultValue={record.cardNumber}
				type={showCardNum ? 'text' : 'password'}
				InputProps={{
					readOnly: true,
					endAdornment:
						<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
							<Tooltip title='Компрометация карты'>
								<IconButton onClick={() => {
								}}>
									<VerifyIcon />
								</IconButton>
							</Tooltip>
							<IconButton onClick={showCardNumClickHandler}>
								{showCardNum ? <VisibilityOffIcon /> :
									<VisibilityIcon />}
							</IconButton>
							<IconButton onClick={() => copyContent(record.cardNumber)}>
								<CopyIcon />
							</IconButton>
						</InputAdornment>
				}}
				variant='standard'
			/>
			<TextField
				label='Месяц/Год'
				defaultValue={record.expireDate}
				type={showExpDate ? 'text' : 'password'}
				InputProps={{
					readOnly: true,
					endAdornment:
						<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
							<IconButton onClick={showExpDateClickHandler}>
								{showExpDate ? <VisibilityOffIcon /> :
									<VisibilityIcon />}
							</IconButton>
							<IconButton onClick={() => copyContent(record.expireDate)}>
								<CopyIcon />
							</IconButton>
						</InputAdornment>
				}}
				variant='standard'
			/>
			<TextField
				label='CVC'
				defaultValue={record.cvc}
				type={showCVC ? 'text' : 'password'}
				InputProps={{
					readOnly: true,
					endAdornment:
						<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
							<IconButton onClick={showCVCClickHandler}>
								{showCVC ? <VisibilityOffIcon /> :
									<VisibilityIcon />}
							</IconButton>
							<IconButton onClick={() => copyContent(record.cvc)}>
								<CopyIcon />
							</IconButton>
						</InputAdornment>
				}}
				variant='standard'
			/>
		</>
	);
};
