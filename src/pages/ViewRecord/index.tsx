import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import qs from 'qs';

import { selectIsAuth } from '../../redux/auth/selectors';

import { AddressRecordView, CardRecordView, LoginRecordView, NoteRecordView, TopPanel } from '../../components';
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';

import { Records } from '../../assets/consts';
import { Record } from '../../@types/basic-types';

import { nameEmptyFolder } from '../../utils/nameEmptyFolder';
import { copyContent } from '../../utils/copyContent';
import { isAddress, isCard, isLogin, isNote } from '../../utils/checkRecordType';

import { ReactComponent as CopyIcon } from '../../assets/img/copy-icon.svg';

import styles from './ViewRecord.module.scss';

import { recordNote } from '../../mocks/recordMocks';

// TODO - get data from Redux
// TODO - add logic for verify button

export const ViewRecord = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [showCardNum, setShowCardNum] = useState(false);
	const [showCVC, setShowCVC] = useState(false);
	const [showExpDate, setShowExpDate] = useState(false);

	const [isFav, setFav] = useState(false);

	const { id } = qs.parse(window.location.search.substring(1));

	console.log(id);

	let record = recordNote;

	const passwordShowClickHandler = () => setShowPassword(!showPassword);
	const showCardNumClickHandler = () => setShowCardNum(!showCardNum);
	const showCVCClickHandler = () => setShowCVC(!showCVC);
	const showExpDateClickHandler = () => setShowExpDate(!showExpDate);

	const RecordView = <T extends Record>(record: T) => {
		if (isLogin(record)) {
			return <LoginRecordView record={record}
			                        passwordShowClickHandler={passwordShowClickHandler}
			                        showPassword={showPassword} />
		} else if (isCard(record)) {
			return <CardRecordView record={record}
			                       showCardNum={showCardNum}
			                       showCardNumClickHandler={showCardNumClickHandler}
			                       showCVC={showCVC}
			                       showCVCClickHandler={showCVCClickHandler}
			                       showExpDate={showExpDate}
			                       showExpDateClickHandler={showExpDateClickHandler} />
		} else if (isAddress(record)) {
			return <AddressRecordView record={record} />
		} else if (isNote(record)) {
			return <NoteRecordView record={record} />
		}
	};

	const isAuth = useSelector(selectIsAuth);

	if (!isAuth) {
		return <Navigate to='/login' />;
	}

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
									<IconButton onClick={() => copyContent(record.title)}>
										<CopyIcon />
									</IconButton>
								</InputAdornment>
						}}
						variant='standard'
					/>
					{RecordView(record)}
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
