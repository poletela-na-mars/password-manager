import { useNavigate } from 'react-router-dom';

import { FolderCard, RecordCard } from '../../@types/basic-types';
import { ListingElementType, Urls } from '../../assets/consts';

import { mappingRecordTypeToIcon } from '../../assets/mappingRecordTypeToIcon';
import { ReactComponent as StarIcon } from '../../assets/img/star-icon.svg';
import { ReactComponent as FolderIcon } from '../../assets/img/folder-icon.svg';

import { isFolderCard, isRecordCard } from '../../utils/checkCardType';

import styles from './ListingElement.module.scss';

interface ListingElementProps {
	type: ListingElementType;
	element: RecordCard | FolderCard;
}

export const ListingElement = ({ type, element }: ListingElementProps) => {
	const navigate = useNavigate();

	const clickListElementHandler = () => {
		// TODO - get element id from Redux
		const id = 105;
		if (type === ListingElementType.Record) navigate(`${Urls.AllRecords}/${id}`);
		else navigate(`${Urls.AllFolders}/${id}`);
	};

	const Card = (card: RecordCard | FolderCard) => {
		if (isRecordCard(card)) {
			return (
				<li className={`${styles.listElement} ${styles.recordElement}`} onClick={clickListElementHandler}>
					<div className={styles.leftRecordGroup}>
						{mappingRecordTypeToIcon[card.type]}
						<div className={styles.textGroup}>
							<h4 className={styles.recordHeader}>{card.title}</h4>
							<p>{card.info}</p>
						</div>
					</div>

					{card.isFav && <StarIcon className={styles.starIcon} />}
				</li>
			);
		} else if (isFolderCard(card)) {
			return (
				<li className={`${styles.listElement} ${styles.folderElement}`} onClick={clickListElementHandler}>
					<div className={styles.leftFolderGroup}>
						<FolderIcon />
						<h4 className={styles.folderHeader}>{card.title}</h4>
					</div>

					{card.isFav && <StarIcon className={styles.starIcon} />}
				</li>
			);
		}
	};

	return (
		<>
			{Card(element)}
		</>
	);
};
