import { ListingElementType, RecordsTypes } from '../assets/consts';

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

export interface Folder {
	_id: string;
	createdAt: Date;
	editedAt: Date;
	elementType: ListingElementType.Folder;
	title: string;
	isFav: boolean;
}

export interface Record {
	_id: string;
	createdAt: Date;
	editedAt: Date;
	elementType: ListingElementType.Record;
	folder: Folder;
	isFav: boolean;
}

export interface Login extends Record {
	type: RecordsTypes.Login;
	title: string;
	name: string;
	password: string;
	uri: string;
}

export interface Card extends Record {
	type: RecordsTypes.Card;
	title: string;
	name: string;
	cardNumber: string; // TODO - string or number
	expireDate: Date;
	cvc: string; // TODO - string or number
}

export interface Address extends Record {
	type: RecordsTypes.Address;
	title: string;
	address: string; // TODO - use lib
}

export interface Note extends Record {
	type: RecordsTypes.Note;
	title: string;
	note: string;
}

export type RecordType = 'login' | 'card' | 'address' | 'note';
