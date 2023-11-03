import styles from './FoldersList.module.scss';

// TODO - get folders from redux
// TODO - navigate to urls from redux

export const FoldersList = () => {
	return (
		<>
			{
				['Важное с конференции 13.08', 'Родительское собрание'].map((folderName, idx) => (
					<li key={idx} className={styles.folderLine}>
						<p onClick={() => console.log('click folder')}>{folderName}</p>
					</li>
				))
			}
		</>
	);
};
