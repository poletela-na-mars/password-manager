import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsAuth } from '../../redux/auth/selectors';

import { Listing, TopPanel } from '../../components';

import { FolderCard, RecordCard } from '../../@types/basic-types';
import { RecordsTypes } from '../../assets/consts';

// TODO - get list of favs from Redux

export const Favourites = () => {
	const isAuth = useSelector(selectIsAuth);

	if (!isAuth) {
		return <Navigate to='/login' />;
	}

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
