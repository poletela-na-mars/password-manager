import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

import { icons, sections, sectionsUrls } from '../../assets/barNaming';
import { SectionsUrls } from '../../assets/consts';

import styles from './BottomBar.module.scss';

export const BottomBar = () => {
	const [activeSection, setActiveSection] = useState(0);

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
		<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1 }} className={styles.root} elevation={3}>
			<BottomNavigation className={styles.block} showLabels value={activeSection}
			                  onChange={(event, idx) => sectionButtonClickHandler(idx)}>
				{
					sections.map((item, idx) => <BottomNavigationAction className={`${styles.section} 
					${activeSection === idx ? styles.activeSection : ''}`} key={idx} label={item} icon={icons[idx]} />)
				}
			</BottomNavigation>
		</Paper>
	);
};
