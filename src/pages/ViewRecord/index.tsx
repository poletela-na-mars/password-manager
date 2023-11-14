import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import qs from 'qs';

import { selectIsAuth } from '../../redux/auth/selectors';

import { CardRecordView, LoginRecordView, AddressRecordView, TopPanel, NoteRecordView } from '../../components';
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';

import { ListingElementType, Records, RecordsTypes } from '../../assets/consts';
import { Folder, Login } from '../../@types/basic-types';

import { nameEmptyFolder } from '../../utils/nameEmptyFolder';
import { copyContent } from '../../utils/copyContent';

import { ReactComponent as CopyIcon } from '../../assets/img/copy-icon.svg';

import styles from './ViewRecord.module.scss';

// TODO - get data from Redux
// TODO - add logic for verify button

export const ViewRecord = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [isFav, setFav] = useState(false);

	const { id } = qs.parse(window.location.search.substring(1));

	console.log(id);

	const folder: Folder = {
		_id: '1f',
		createdAt: new Date(),
		editedAt: new Date(),
		elementType: ListingElementType.Folder,
		title: '',
		isFav: true,
	};

	const record: Login = {
		_id: '1',
		createdAt: new Date(),
		editedAt: new Date(),
		elementType: ListingElementType.Record,
		folder: folder,
		isFav: true,
		type: RecordsTypes.Login,

		title: 'Github',
		name: 'polina-code@gmail.com',
		password: 'password',
		uri: 'https://github.com/poletela-na-mars',
	};

	const isAuth = useSelector(selectIsAuth);

	if (!isAuth) {
		return <Navigate to='/login' />;
	}

	const passwordShowClickHandler = () => setShowPassword(!showPassword);

	return (
		<>
			<TopPanel title={record.title} isFav={isFav} setFav={setFav} />
			<div className={styles.container}>
				<Stack
					component='form'
					sx={{
						width: '35ch',
					}}
					spacing={3}
					noValidate
				>
					<TextField
						label='Тип записи'
						defaultValue={Records[record.type]}
						InputProps={{
							readOnly: true,
						}}
						variant='standard'
					/>
					<TextField
						label='Название'
						defaultValue={record.title}
						InputProps={{
							readOnly: true,
							endAdornment:
								<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
									<IconButton onClick={() => copyContent(record.uri)}>
										<CopyIcon />
									</IconButton>
								</InputAdornment>
						}}
						variant='standard'
					/>
					{
						record.type === RecordsTypes.Login ?
							<LoginRecordView passwordShowClickHandler={passwordShowClickHandler} showPassword={showPassword}
							                 record={record} /> :
							record.type === RecordsTypes.Card ? <CardRecordView /> :
								record.type === RecordsTypes.Address ? <AddressRecordView /> :
									record.type === RecordsTypes.Note && <NoteRecordView />
					}
					<TextField
						label='Папка'
						defaultValue={nameEmptyFolder(record.folder.title)}
						InputProps={{
							readOnly: true
						}}
						variant='standard'
					/>
				</Stack>
			</div>
		</>
	);
};
