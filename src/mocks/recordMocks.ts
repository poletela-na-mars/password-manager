import { Address, Card, Folder, Login, Note } from '../@types/basic-types';
import { ListingElementType, RecordsTypes } from '../assets/consts';

const folder: Folder = {
	_id: '1f',
	createdAt: new Date(),
	editedAt: new Date(),
	elementType: ListingElementType.Folder,
	title: '',
	isFav: true,
};

const recordLogin: Login = {
	_id: '1',
	createdAt: new Date(),
	editedAt: new Date(),
	elementType: ListingElementType.Record,
	folder: folder,
	isFav: true,
	type: RecordsTypes.Login,

	title: 'Github',
	name: 'polina-code@gmail.com',
	password: 'password',
	uri: 'https://github.com/poletela-na-mars',
};

const recordCard: Card = {
	_id: '2',
	createdAt: new Date(),
	editedAt: new Date(),
	elementType: ListingElementType.Record,
	folder: folder,
	isFav: true,
	type: RecordsTypes.Card,

	title: 'Tinkoff Black (work)',
	name: 'POLINA POSTYLYAKOVA',
	cardNumber: '1234 5678 9101 1234',
	expireDate: '12/28',
	cvc: '123',
};

const recordAddress: Address = {
	_id: '3',
	createdAt: new Date(),
	editedAt: new Date(),
	elementType: ListingElementType.Record,
	folder: folder,
	isFav: true,
	type: RecordsTypes.Address,

	title: 'Фитнес-клуб',
	country: 'Россия',
	city: 'Москва',
	street: 'ул. Авиаконструктора Сухого',
	house: '12',
};

const recordNote: Note = {
	_id: '4',
	createdAt: new Date(),
	editedAt: new Date(),
	elementType: ListingElementType.Record,
	folder: folder,
	isFav: true,
	type: RecordsTypes.Note,

	title: 'Стих ко дню матери',
	note: 'Лучшей маме на планете\n' +
		'Я с любовью и теплом\n' +
		'Посвящаю строки эти,\n' +
		'Пусть везёт тебе во всём!\n' +
		'\n' +
		'Я люблю тебя так сильно,\n' +
		'Что в словах не передать,\n' +
		'Пожелаю быть счастливой\n' +
		'И улыбкою сиять!',
};

const folders: Folder[] = [
	{
		_id: '2',
		title: 'Важное с конференеции',
		createdAt: new Date(),
		editedAt: new Date(),
		elementType: ListingElementType.Folder,
		isFav: true,
	},
	{
		_id: '1',
		title: 'Родительское собрание',
		createdAt: new Date(),
		editedAt: new Date(),
		elementType: ListingElementType.Folder,
		isFav: false,
	}
];

export { recordCard, recordLogin, recordAddress, recordNote, folder, folders };
