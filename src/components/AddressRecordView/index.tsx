import { IconButton, InputAdornment, TextField } from '@mui/material';

import { Address } from '../../@types/basic-types';

import { copyContent } from '../../utils/copyContent';

import { ReactComponent as CopyIcon } from '../../assets/img/copy-icon.svg';

interface AddressRecordViewProps {
	record: Address;
}

export const AddressRecordView = ({ record }: AddressRecordViewProps) => {
	return (
		<>
			<TextField
				label='Страна'
				defaultValue={record.country}
				InputProps={{
					readOnly: true,
					endAdornment:
						<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
							<IconButton onClick={() => copyContent(record.country)}>
								<CopyIcon />
							</IconButton>
						</InputAdornment>
				}}
				variant='standard'
			/>
			{
				record.index &&
				<TextField
					label='Индекс'
					defaultValue={record.index}
					InputProps={{
						readOnly: true,
						endAdornment:
							<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
								<IconButton onClick={() => copyContent(record.index!)}>
									<CopyIcon />
								</IconButton>
							</InputAdornment>
					}}
					variant='standard'
				/>
			}
			{
				record.region &&
				<TextField
					label='Регион'
					defaultValue={record.region}
					InputProps={{
						readOnly: true,
						endAdornment:
							<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
								<IconButton onClick={() => copyContent(record.region!)}>
									<CopyIcon />
								</IconButton>
							</InputAdornment>
					}}
					variant='standard'
				/>
			}
			<TextField
				label='Город'
				defaultValue={record.city}
				InputProps={{
					readOnly: true,
					endAdornment:
						<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
							<IconButton onClick={() => copyContent(record.city)}>
								<CopyIcon />
							</IconButton>
						</InputAdornment>
				}}
				variant='standard'
			/>
			<TextField
				label='Улица'
				defaultValue={record.street}
				InputProps={{
					readOnly: true,
					endAdornment:
						<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
							<IconButton onClick={() => copyContent(record.street)}>
								<CopyIcon />
							</IconButton>
						</InputAdornment>
				}}
				variant='standard'
			/>
			{
				record.house &&
				<TextField
					label='Дом'
					defaultValue={record.house}
					InputProps={{
						readOnly: true,
						endAdornment:
							<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
								<IconButton onClick={() => copyContent(record.house!)}>
									<CopyIcon />
								</IconButton>
							</InputAdornment>
					}}
					variant='standard'
				/>
			}
			{
				record.building &&
				<TextField
					label='Корпус'
					defaultValue={record.building}
					InputProps={{
						readOnly: true,
						endAdornment:
							<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
								<IconButton onClick={() => copyContent(record.building!)}>
									<CopyIcon />
								</IconButton>
							</InputAdornment>
					}}
					variant='standard'
				/>
			}
			{
				record.entrance &&
				<TextField
					label='Подъезд'
					defaultValue={record.entrance}
					InputProps={{
						readOnly: true,
						endAdornment:
							<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
								<IconButton onClick={() => copyContent(record.entrance!)}>
									<CopyIcon />
								</IconButton>
							</InputAdornment>
					}}
					variant='standard'
				/>
			}
			{
				record.flat &&
				<TextField
					label='Квартира'
					defaultValue={record.flat}
					InputProps={{
						readOnly: true,
						endAdornment:
							<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
								<IconButton onClick={() => copyContent(record.flat!)}>
									<CopyIcon />
								</IconButton>
							</InputAdornment>
					}}
					variant='standard'
				/>
			}
			{
				record.note &&
				<TextField
					label='Заметка'
					defaultValue={record.note}
					InputProps={{
						readOnly: true,
						endAdornment:
							<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
								<IconButton onClick={() => copyContent(record.note!)}>
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
