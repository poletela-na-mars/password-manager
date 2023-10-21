import { useEffect, useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Sections, SectionsUrls } from '../../assets/consts';

import { ReactComponent as StorageIcon } from '../../assets/img/storage-icon.svg';
import { ReactComponent as ShareIcon } from '../../assets/img/share-icon.svg';
import { ReactComponent as GenerateIcon } from '../../assets/img/generate-icon.svg';
import { ReactComponent as SettingsIcon } from '../../assets/img/settings-icon.svg';

import { theme } from '../../scss/theme';

import styles from './SideBar.module.scss';

const icons = [<StorageIcon />, <ShareIcon />, <GenerateIcon />, <SettingsIcon />];
const sections = [Sections.Storage, Sections.Share, Sections.Generator, Sections.Settings];
const sectionsUrls = [SectionsUrls.Storage, SectionsUrls.Share, SectionsUrls.Generator, SectionsUrls.Settings];

type SideBarProps = {
	position: string;
};

export const SideBar = ({ position }: SideBarProps) => {
	const [activeSection, setActiveSection] = useState<number>();

	const navigate = useNavigate();

	const sectionButtonClickHandler = (idx: number) => {
		setActiveSection(idx);
		navigate(sectionsUrls[idx]);
	};

	useEffect(() => {
		if (sectionsUrls.includes(window.location.pathname as SectionsUrls))
			setActiveSection(sectionsUrls.indexOf(window.location.pathname as SectionsUrls));
	}, []);

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
				<List sx={{ p: 0 }}>
					{
						sections.map((item, idx) => (
							<ListItem disablePadding key={idx}>
								<ListItemButton className={styles.listItemButton} onClick={() => sectionButtonClickHandler(idx)}
								                selected={activeSection === idx}>
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
