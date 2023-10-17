import { Header } from '../../components';
import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.scss';

export const MainLayout = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.content}>
				<Outlet />
			</div>
		</div>
	)
};
