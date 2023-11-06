import { RecordsTypes } from '../assets/consts';

export interface RecordCard {
	type: RecordsTypes;
	title: string;
	info: string;
	isFav: boolean;
}

export interface FolderCard {
	title: string;
	isFav: boolean;
}

export type RecordType = 'login' | 'card' | 'address' | 'note';
