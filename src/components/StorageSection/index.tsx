import { ReactNode } from 'react';

import styles from './StorageSection.module.scss';

interface StorageSectionProps {
	name: string;
	length: number;
	children?: ReactNode;
}

export const StorageSection = ({ name, children, length }: StorageSectionProps) => {
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<h3>{name}</h3>
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
