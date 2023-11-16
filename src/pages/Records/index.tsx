import qs from 'qs';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsAuth } from '../../redux/auth/selectors';

import { Listing, TopPanel } from '../../components';

import { Records as RecordsMap } from '../../assets/consts';

import { toRecordCardAdapter } from '../../utils/toRecordCardAdapter';

import { RecordCard, RecordType } from '../../@types/basic-types';

import { records } from '../../mocks/recordMocks';

// TODO - get list of Records from Redux
// TODO - change record name cause of type

export const Records = () => {
	const { type } = qs.parse(window.location.search.substring(1));

	const isAuth = useSelector(selectIsAuth);

	if (!isAuth) {
		return <Navigate to='/login' />;
	}

	const list: RecordCard[] = toRecordCardAdapter(records);

	return (
		<Listing list={list}>
			<TopPanel title={`${RecordsMap[type as RecordType] || 'Записи'}`} length={3} />
		</Listing>
	);
};
