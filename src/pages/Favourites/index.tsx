import { Listing, TopPanel } from '../../components';

import { FolderCard, RecordCard } from '../../@types/basic-types';
import { RecordsTypes } from '../../assets/consts';

// TODO - get list of favs from Redux

export const Favourites = () => {
	const list: (RecordCard | FolderCard)[] = [
		{
			type: RecordsTypes.Login,
			title: 'Stepik',
			info: 'polina-study@gmail.com',
			isFav: true,
		},
		{
			title: 'Родительское собрание',
			isFav: true,
		},
	];

	return (
		<Listing list={list}>
			<TopPanel title='Избранное' length={2} />
		</Listing>
	);
};
