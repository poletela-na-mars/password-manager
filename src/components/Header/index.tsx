import { AppBar, IconButton, Toolbar } from '@mui/material';

import { Search } from '../Search';

import { ReactComponent as AccountIcon } from '../../assets/img/account-icon.svg';

import styles from './Header.module.scss';

// TODO - change value in h2 cause of url
export const Header = () => {
	return (
		<AppBar position='static' elevation={0}>
			<Toolbar className={styles.toolBar}>
				<h2 className={styles.title}>Хранилище</h2>

				<div className={styles.buttonsGroup}>
					<Search />
					<IconButton>
						<AccountIcon className={styles.accountIcon} />
					</IconButton>
				</div>

			</Toolbar>
		</AppBar>
	);
};
