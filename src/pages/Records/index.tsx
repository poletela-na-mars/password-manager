import qs from 'qs';

import { TopPanel } from '../../components/Listing/TopPanel';
import { Listing } from '../../components';

import { RecordsTypes, Records as RecordsMap } from '../../assets/consts';
import { RecordCard, RecordType } from '../../@types/basic-types';

// TODO - get list of Records from Redux
// TODO - change record name cause of type

export const Records = () => {
	const { type } = qs.parse(window.location.search.substring(1));

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
