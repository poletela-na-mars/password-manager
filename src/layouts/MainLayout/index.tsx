import { Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Header, SideBar } from '../../components'

import styles from './MainLayout.module.scss';

export const MainLayout = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			{/*подложка для SideBar*/}
			<SideBar position='relative' />
			<SideBar position='fixed' />

			<main className={styles.content}>
				<Toolbar />
				<Outlet />
			</main>
		</div>
	)
};
