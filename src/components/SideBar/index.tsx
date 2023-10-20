import { Box, Drawer, List, ListItem, ListItemButton, Toolbar } from '@mui/material';

import { Sections } from '../../assets/consts';

import { ReactComponent as StorageIcon } from '../../assets/img/storage-icon.svg';
import { ReactComponent as ShareIcon } from '../../assets/img/share-icon.svg';
import { ReactComponent as GenerateIcon } from '../../assets/img/generate-icon.svg';
import { ReactComponent as SettingsIcon } from '../../assets/img/settings-icon.svg';

import styles from './SideBar.module.scss';
import { theme } from '../../scss/theme';

const icons = [<StorageIcon />, <ShareIcon />, <GenerateIcon />, <SettingsIcon />];

type SideBarProps = {
	position: string;
};

export const SideBar = ({position}: SideBarProps) => {
	return (
		<Drawer
			className={styles.drawer}
			variant='permanent'
			sx={{
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					boxSizing: 'border-box',
					position: position,
					backgroundColor: theme.palette.secondary.main,
					border: 'none'
				},
			}}
		>
			<Toolbar />
			<Box sx={{ overflow: 'auto' }}>
				<List>
					{
						[Sections.Storage, Sections.Share, Sections.Generator, Sections.Settings].map((item, idx) => (
							<ListItem disablePadding key={idx}>
								<ListItemButton className={styles.listItemButton}>
									<>
										{icons[idx]}
										<h4 className={styles.listItemTitle}>{item as string}</h4>
									</>
								</ListItemButton>
							</ListItem>
						))
					}

				</List>
			</Box>
		</Drawer>
	);
};
