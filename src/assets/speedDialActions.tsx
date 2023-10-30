import { ReactComponent as RecordIcon } from './img/record-icon.svg';
import { ReactComponent as FolderIcon } from './img/folder-icon.svg';

type SpeedDialActions = {
	icon: JSX.Element;
	name: string;
};

export const speedDialActions: SpeedDialActions[] = [
	{
		icon: <RecordIcon />,
		name: 'Запись'
	},
	{
		icon: <FolderIcon />,
		name: 'Папка'
	},
];
