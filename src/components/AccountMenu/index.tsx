import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ListItemIcon, Menu, MenuItem } from '@mui/material';

import { ModalWindow } from '../ModalWindow';

import { AppDispatch } from '../../redux/store';
import { logout } from '../../redux/auth/slice';

import { ReactComponent as LogoutIcon } from '../../assets/img/logout-icon.svg';

import styles from './AccountMenu.module.scss';

type AccountMenuProps = {
	anchorEl: HTMLElement | null;
	open: boolean;
	handleClose: () => void;
};

export const AccountMenu = ({ anchorEl, open, handleClose }: AccountMenuProps) => {
	const [openPopup, setOpenPopup] = useState(false);

	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const logoutHandler = () => {
		dispatch(logout());
		window.localStorage.removeItem('token');
		navigate('/login');
	};

	const closePopupHandler = () => {
		setOpenPopup(!openPopup);
	};

	return (
		<>
			<ModalWindow openPopup={openPopup}
			             closePopupHandler={closePopupHandler}
			             actionHandler={logoutHandler}
			             text='Вы действительно хотите выйти?'
			             error={false}
			/>

			<Menu
				anchorEl={anchorEl}
				id='account-menu'
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				sx={{ zIndex: 1501 }}
				disableScrollLock={true}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 6.5px 5px rgba(0,0,0,0.15))',
						mt: 1.5,
						borderRadius: 2,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				{/*<MenuItem onClick={handleClose} className={styles.menuItem}>*/}
				{/*	<ListItemIcon>*/}
				{/*		<SettingsIcon />*/}
				{/*	</ListItemIcon>*/}
				{/*	Настройки*/}
				{/*</MenuItem>*/}
				<MenuItem onClick={() => setOpenPopup(!openPopup)} className={styles.menuItem}>
					<ListItemIcon>
						<LogoutIcon />
					</ListItemIcon>
					Выйти
				</MenuItem>
			</Menu>
		</>
	);
};
