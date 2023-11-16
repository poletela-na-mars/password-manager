import styles from './FoldersList.module.scss';

import { useNavigate } from 'react-router-dom';

import { Urls } from '../../assets/consts';

import { folders } from '../../mocks/recordMocks';

// TODO - get folders from redux
// TODO - navigate to urls from redux

export const FoldersList = () => {
	const navigate = useNavigate();

	const navigateHandler = (id: string) => {
		navigate(`${Urls.AllFolders}/${id}`);
	};

	return (
		<>
			{
				folders.map((folder) => (
					<li key={folder._id} className={styles.folderLine}>
						<p onClick={() => navigateHandler(folder._id)}>{folder.title}</p>
					</li>
				))
			}
		</>
	);
};
