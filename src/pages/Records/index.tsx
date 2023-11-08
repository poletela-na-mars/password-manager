import qs from 'qs';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsAuth } from '../../redux/auth/selectors';

import { Listing, TopPanel } from '../../components';

import { Records as RecordsMap, RecordsTypes } from '../../assets/consts';
import { RecordCard, RecordType } from '../../@types/basic-types';

// TODO - get list of Records from Redux
// TODO - change record name cause of type

export const Records = () => {
	const { type } = qs.parse(window.location.search.substring(1));

	const isAuth = useSelector(selectIsAuth);

	if (!isAuth) {
		return <Navigate to='/login' />;
	}

	const list: RecordCard[] = [
		{
			type: RecordsTypes.Login,
			title: 'Stepik',
			info: 'polina-study@gmail.com',
			isFav: true,
		},
		{
			type: RecordsTypes.Card,
			title: 'Tinkoff Black (work)',
			info: '*5890',
			isFav: false,
		},
	];

	return (
		<Listing list={list}>
			<TopPanel title={`${RecordsMap[type as RecordType] || 'Записи'}`} length={3} />
		</Listing>
	);
};
