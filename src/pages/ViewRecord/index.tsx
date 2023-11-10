import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsAuth } from '../../redux/auth/selectors';

// TODO - add copy icon

export const ViewRecord = () => {
	const isAuth = useSelector(selectIsAuth);

	if (!isAuth) {
		return <Navigate to='/login' />;
	}

	return (
		<div>ViewRecord</div>
	);
};
