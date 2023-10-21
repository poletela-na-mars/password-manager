import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsAuth } from '../../redux/auth/selectors';

export const Storage = () => {
	const isAuth = useSelector(selectIsAuth);

	if (!isAuth) {
		return <Navigate to='/login' />;
	}

	return (
		<>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam culpa cumque, ex id inventore labore!
				Architecto consequuntur deleniti dicta, eaque eligendi expedita laborum optio reprehenderit saepe, tempora
				temporibus unde.
			</div>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam culpa cumque, ex id inventore labore!
				Architecto consequuntur deleniti dicta, eaque eligendi expedita laborum optio reprehenderit saepe, tempora
				temporibus unde.
			</div>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam culpa cumque, ex id inventore labore!
				Architecto consequuntur deleniti dicta, eaque eligendi expedita laborum optio reprehenderit saepe, tempora
				temporibus unde.
			</div>

			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam culpa cumque, ex id inventore labore!
				Architecto consequuntur deleniti dicta, eaque eligendi expedita laborum optio reprehenderit saepe, tempora
				temporibus unde.
			</div>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam culpa cumque, ex id inventore labore!
				Architecto consequuntur deleniti dicta, eaque eligendi expedita laborum optio reprehenderit saepe, tempora
				temporibus unde.
			</div>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam culpa cumque, ex id inventore labore!
				Architecto consequuntur deleniti dicta, eaque eligendi expedita laborum optio reprehenderit saepe, tempora
				temporibus unde.
			</div>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam culpa cumque, ex id inventore labore!
				Architecto consequuntur deleniti dicta, eaque eligendi expedita laborum optio reprehenderit saepe, tempora
				temporibus unde.
			</div>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam culpa cumque, ex id inventore labore!
				Architecto consequuntur deleniti dicta, eaque eligendi expedita laborum optio reprehenderit saepe, tempora
				temporibus unde.
			</div>

			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam culpa cumque, ex id inventore labore!
				Architecto consequuntur deleniti dicta, eaque eligendi expedita laborum optio reprehenderit saepe, tempora
				temporibus unde.
			</div>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam culpa cumque, ex id inventore labore!
				Architecto consequuntur deleniti dicta, eaque eligendi expedita laborum optio reprehenderit saepe, tempora
				temporibus unde.
			</div>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam culpa cumque, ex id inventore labore!
				Architecto consequuntur deleniti dicta, eaque eligendi expedita laborum optio reprehenderit saepe, tempora
				temporibus unde.
			</div>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam culpa cumque, ex id inventore labore!
				Architecto consequuntur deleniti dicta, eaque eligendi expedita laborum optio reprehenderit saepe, tempora
				temporibus unde.
			</div>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam culpa cumque, ex id inventore labore!
				Architecto consequuntur deleniti dicta, eaque eligendi expedita laborum optio reprehenderit saepe, tempora
				temporibus unde.
			</div>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam culpa cumque, ex id inventore labore!
				Architecto consequuntur deleniti dicta, eaque eligendi expedita laborum optio reprehenderit saepe, tempora
				temporibus unde.
			</div>
		</>
	);
};
