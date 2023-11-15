import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsAuth } from '../../redux/auth/selectors';

// TODO - get data from this folder from Redux

export const ViewFolder = () => {
	const isAuth = useSelector(selectIsAuth);

	if (!isAuth) {
		return <Navigate to='/login' />;
	}

	return (
		<div>ViewFolder</div>
	);
};
