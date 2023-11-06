import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Divider } from '@mui/material';

import { selectIsAuth } from '../../redux/auth/selectors';

import { CreateSpeedDial, FoldersList, RecordsList, StorageSection, PasswordsStats } from '../../components';

import { Urls } from '../../assets/consts';

export const Storage = () => {
	const isAuth = useSelector(selectIsAuth);

	if (!isAuth) {
		return <Navigate to='/login' />;
	}

	// TODO - length of records from Redux

	return (
		<>
			<CreateSpeedDial />

			<StorageSection name='Записи' length={3} url={Urls.AllRecords}>
				<RecordsList />
			</StorageSection>
			<Divider />
			<StorageSection name='Папки' length={2} url={Urls.AllFolders}>
				<FoldersList />
			</StorageSection>
			<Divider />
			<StorageSection name='Избранное' length={1} url={Urls.Favourites} />

			<PasswordsStats />
		</>
	);
};
