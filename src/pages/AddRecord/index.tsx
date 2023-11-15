import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsAuth } from '../../redux/auth/selectors';

import { AddressRecordForm, CardRecordForm, LoginRecordForm, NoteRecordForm, TopPanel } from '../../components';

import { FormControl, FormHelperText, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';

import { RecordsTypes } from '../../assets/consts';
import { recordsTypes, recordsUrls } from '../../assets/allRecordsNaming';

import styles from './AddRecord.module.scss';

import { folders } from '../../mocks/recordMocks';

// TODO - show errors from back (error + helperText)
// TODO - react-hook-form
// TODO - add logic
// TODO - get all folders from Redux

// TODO - pull field values as textFieldsProps in Login

export const AddRecord = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [isFav, setFav] = useState(false);
	const [type, setType] = useState<RecordsTypes>(RecordsTypes.Login);
	const [folder, setFolder] = useState('');

	const isAuth = useSelector(selectIsAuth);

	if (!isAuth) {
		return <Navigate to='/login' />;
	}

	const changeTypeHandler = (event: SelectChangeEvent) => {
		setType(event.target.value as RecordsTypes);
	};

	const changeFolderHandler = (event: SelectChangeEvent) => {
		setFolder(event.target.value);
	};

	const passwordShowClickHandler = () => setShowPassword(!showPassword);

	const RecordForm = (record: RecordsTypes) => {
		if (record === RecordsTypes.Login) {
			return <LoginRecordForm passwordShowClickHandler={passwordShowClickHandler} showPassword={showPassword} />
		} else if (record === RecordsTypes.Card) {
			return <CardRecordForm />
		} else if (record === RecordsTypes.Address) {
			return <AddressRecordForm />
		} else if (record === RecordsTypes.Note) {
			return <NoteRecordForm />
		}
	};

	return (
		<>
			<TopPanel title='Добавление новой записи' isFav={isFav} setFav={setFav} />
			<div className={styles.container}>
				<Stack
					component='form'
					sx={{
						width: '35ch',
					}}
					spacing={3}
					noValidate
				>
					<FormControl sx={{ display: 'block' }} size='small'>
						<FormHelperText sx={{ margin: 0 }}>Тип записи</FormHelperText>
						<Select
							value={type}
							onChange={changeTypeHandler}
							displayEmpty
							inputProps={{ 'aria-label': 'Record type' }}
						>
							{
								recordsTypes.map((r, idx) => <MenuItem key={idx} value={recordsUrls[idx]}>{r}</MenuItem>)
							}
						</Select>
					</FormControl>
					{RecordForm(type)}
					<FormControl sx={{ display: 'block' }} size='small'>
						<FormHelperText sx={{ margin: 0 }}>Папка</FormHelperText>
						<Select
							value={folder}
							onChange={changeFolderHandler}
							displayEmpty
							inputProps={{ 'aria-label': 'Record type' }}
						>
							<MenuItem value=''>Без папки</MenuItem>
							{
								folders.map((f) => <MenuItem key={f._id} value={f._id}>{f.title}</MenuItem>)
							}
						</Select>
					</FormControl>

					<button className={styles.submitButton} type='submit' disabled={false}>
						Сохранить
					</button>
				</Stack>
			</div>
		</>
	);
};
