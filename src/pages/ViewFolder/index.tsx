import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsAuth } from '../../redux/auth/selectors';

import { Listing, TopPanel } from '../../components';

import { RecordCard } from '../../@types/basic-types';

import { toRecordCardAdapter } from '../../utils/toRecordCardAdapter';

import { records } from '../../mocks/recordMocks';

// TODO - get data from this folder from Redux

export const ViewFolder = () => {
	const isAuth = useSelector(selectIsAuth);

	if (!isAuth) {
		return <Navigate to='/login' />;
	}

	const list: RecordCard[] = toRecordCardAdapter(records);

	return (
		<Listing list={list}>
			{/*TODO - change*/}
			<TopPanel title='Название папки' length={3} />
		</Listing>
	);
};
