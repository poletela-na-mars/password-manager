import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';

export const Logo = () => {
	return (
		<h2 className={styles.title}>
			<Link to='/'>SafeBox</Link>
		</h2>
	);
};
