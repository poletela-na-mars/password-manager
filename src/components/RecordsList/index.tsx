import { recordsIcons, recordsTypes, recordsUrls } from '../../assets/allRecordsNaming';

import styles from './RecordsList.module.scss';

export const RecordsList = () => {
	return (
		<>
			{
				recordsTypes.map((recordType, idx) => (
					<li key={idx} className={styles.recordLine}>
						{recordsIcons[idx]}
						<p>{recordType}</p>
					</li>
				))
			}
		</>
	);
};
