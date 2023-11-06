import React, { Fragment } from 'react';

import { ListingElement } from '../ListingElement';

import { FolderCard, RecordCard } from '../../@types/basic-types';

import { ListingElementType } from '../../assets/consts';

import styles from './Listing.module.scss';

interface ListingProps {
	list: RecordCard[] | FolderCard[];
	children: React.ReactNode;
}

export const Listing = ({ list, children }: ListingProps) => {
	return (
		<>
			<>{children}</>
			<ul className={styles.list}>
				{
					list.map((el, idx) =>
						<Fragment key={idx}>
							{
								'type' in el
									? <ListingElement type={ListingElementType.Record} element={el as RecordCard} />
									: <ListingElement type={ListingElementType.Folder} element={el as FolderCard} />
							}
						</Fragment>
					)
				}
			</ul>
		</>
	);
};

