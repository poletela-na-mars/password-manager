import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

import { speedDialActions } from '../../assets/speedDialActions';

import styles from './CreateSpeedDial.module.scss';

export const CreateSpeedDial = () => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const navigateHandler = (url: string) => {
		navigate(url);
	};

	return (
		<SpeedDial
			ariaLabel='Create Record or Folder'
			className={styles.root}
			icon={<SpeedDialIcon />}
			onClose={handleClose}
			onOpen={handleOpen}
			open={open}
		>
			{speedDialActions.map((action) => (
				<SpeedDialAction
					key={action.name}
					icon={action.icon}
					tooltipTitle={action.name}
					onClick={() => navigateHandler(action.url)}
				/>
			))}
		</SpeedDial>
	);
};

