import { ReactComponent as RecordIcon } from './img/record-icon.svg';
import { ReactComponent as FolderIcon } from './img/folder-icon.svg';

import { Urls } from './consts';

type SpeedDialActions = {
	icon: JSX.Element;
	name: string;
	url: string;
};

export const speedDialActions: SpeedDialActions[] = [
	{
		icon: <RecordIcon />,
		name: 'Запись',
		url: Urls.AddRecord,
	},
	{
		icon: <FolderIcon />,
		name: 'Папка',
		url: Urls.AddFolder,
	},
];
