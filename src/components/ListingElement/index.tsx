import { FolderCard, RecordCard } from '../../@types/basic-types';
import { ListingElementType } from '../../assets/consts';

import { mappingRecordTypeToIcon } from '../../assets/mappingRecordTypeToIcon';
import { ReactComponent as StarIcon } from '../../assets/img/star-icon.svg';
import { ReactComponent as FolderIcon } from '../../assets/img/folder-icon.svg';

import styles from './ListingElement.module.scss';

interface ListingElementProps {
	type: ListingElementType;
	element: RecordCard | FolderCard;
}

export const ListingElement = ({ type, element }: ListingElementProps) => {

	return (
		<>
			{
				(type === ListingElementType.Record)
					?
					<li className={`${styles.listElement} ${styles.recordElement}`}>
						<div className={styles.leftRecordGroup}>
							{mappingRecordTypeToIcon[(element as RecordCard).type]}
							<div className={styles.textGroup}>
								<h4 className={styles.recordHeader}>{(element as RecordCard).title}</h4>
								<p>{(element as RecordCard).info}</p>
							</div>
						</div>

						{(element as RecordCard).isFav && <StarIcon className={styles.starIcon} />}
					</li>
					:
					<li className={`${styles.listElement} ${styles.folderElement}`}>
						<div className={styles.leftFolderGroup}>
							<FolderIcon />
							<h4 className={styles.folderHeader}>{(element as FolderCard).title}</h4>
						</div>

						{(element as FolderCard).isFav && <StarIcon className={styles.starIcon} />}
					</li>
			}
		</>
	);
};
