import { recordsIcons, recordsTypes, recordsUrls } from '../../assets/allRecordsNaming';
import { useNavigateSearch } from '../../utils/useNavigateSearch';

import { RecordsUrls, Urls } from '../../assets/consts';

import styles from './RecordsList.module.scss';

export const RecordsList = () => {
	const navigateSearch = useNavigateSearch();

	const navigateHandler = (recordUrl: RecordsUrls) => {
		navigateSearch(Urls.AllRecords, { type: recordUrl });
	};

	return (
		<>
			{
				recordsTypes.map((recordType, idx) => (
					<li key={idx} className={styles.recordLine}>
						{recordsIcons[idx]}
						<p onClick={() => navigateHandler(recordsUrls[idx])}>{recordType}</p>
					</li>
				))
			}
		</>
	);
};
