import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsAuth } from '../../redux/auth/selectors';

import { Listing, TopPanel } from '../../components';

import { FolderCard } from '../../@types/basic-types';

// TODO - get length from Redux
// TODO - change folder name cause of url
// TODO - get list of Folders from Redux

export const Folders = () => {
	const isAuth = useSelector(selectIsAuth);

	if (!isAuth) {
		return <Navigate to='/login' />;
	}

	const list: FolderCard[] = [
		{
			title: 'Важное с конференции 13.08',
			isFav: false,
		},
		{
			title: 'Родительское собрание',
			isFav: true,
		},
	];

	return (
		<Listing list={list}>
			<TopPanel title='Папки' length={3} />
		</Listing>
	);
};
