import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';


import styles from './StorageSection.module.scss';

interface StorageSectionProps {
	name: string;
	length: number;
	children?: ReactNode;
	url: string;
}

export const StorageSection = ({ name, children, length, url }: StorageSectionProps) => {
	const navigate = useNavigate();

	const navigateHandler = () => {
		navigate(url);
	};

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<h3 onClick={navigateHandler}>{name}</h3>
				<span>{length}</span>
			</div>
			{
				children
					?
					<ul className={styles.block}>
						{children}
					</ul>
					: null
			}
		</div>
	);
};
