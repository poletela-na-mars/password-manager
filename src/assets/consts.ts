export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

export enum Sections {
	Storage = 'Хранилище',
	Share = 'Поделиться',
	Generator = 'Генератор',
	Settings = 'Настройки',
}

export enum SectionsUrls {
	Storage = '/',
	Share = '/share',
	Generator = '/generate',
	Settings = '/settings',
}

export enum Urls {
	AllRecords = '/records',
	AllFolders = '/folders',
	Favourites = '/favourites',
}

// lower case for compatibility in qs parsing
export enum Records {
	login = 'Логин',
	card = 'Карта',
	address = 'Адрес',
	note = 'Заметка',
}

export enum RecordsTypes {
	Login = 'login',
	Card = 'card',
	Address = 'address',
	Note = 'note',
}

export enum ListingElementType {
	Folder = 'folder',
	Record = 'record',
}

export const SCREEN_SM = 576;
export const SCREEN_MD = 768;
export const SCREEN_LG = 992;
export const SCREEN_XL = 1200;
export const SCREEN_XXL = 1400;
