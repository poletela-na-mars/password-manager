import { Outlet } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';

import { BottomBar, Header, SideBar } from '../../components';

import { useResize } from '../../utils/useResize';

import styles from './MainLayout.module.scss';

export const MainLayout = () => {
	const { isScreenLg, isScreenXl, isScreenXxl } = useResize();

	return (
		<Box className={styles.wrapper}>
			<Header />

			{
				(isScreenLg || isScreenXl || isScreenXxl)
					? <>
						{/*подложка для SideBar*/}
						<SideBar position='relative' />
						<SideBar position='fixed' />
					</>
					: <BottomBar />
			}

			<main className={styles.content}>
				<Toolbar />
				<Outlet />
			</main>
		</Box>
	);
};
