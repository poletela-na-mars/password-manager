import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsAuth } from '../../redux/auth/selectors';

export const EditRecord = () => {
	const isAuth = useSelector(selectIsAuth);

	if (!isAuth) {
		return <Navigate to='/login' />;
	}

	return (
		<div>EditRecord</div>
	);
};
