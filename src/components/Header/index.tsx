import React from 'react';
import { AppBar, IconButton, Toolbar, Tooltip } from '@mui/material';

import { Search } from '../Search';
import { AccountMenu } from '../AccountMenu';

import { ReactComponent as AccountIcon } from '../../assets/img/account-icon.svg';

import styles from './Header.module.scss';

// TODO - change value in h2 cause of url
export const Header = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const accountButtonClickHandler = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const accountMenuCloseHandler = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position='fixed' elevation={0} sx={{ zIndex: 2000 }}>
			<Toolbar className={styles.toolBar}>
				<h2 className={styles.title}>Хранилище</h2>

				<div className={styles.buttonsGroup}>
					<Search />
					<Tooltip title='Аккаунт'>
						<IconButton onClick={accountButtonClickHandler}
						            aria-controls={open ? 'account-menu' : undefined}
						            aria-haspopup='true'
						            aria-expanded={open ? 'true' : undefined}
						>
							<AccountIcon className={styles.accountIcon} />
						</IconButton>
					</Tooltip>
					<AccountMenu anchorEl={anchorEl} open={open} handleClose={accountMenuCloseHandler} />
				</div>

			</Toolbar>
		</AppBar>
	);
};
