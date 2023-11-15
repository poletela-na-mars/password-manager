import { Address, Card, Login, Note, Record } from '../@types/basic-types';

function isLogin(record: Record): record is Login {
	return 'name' in record && 'password' in record;
}

function isCard(record: Record): record is Card {
	return 'cardNumber' in record && 'expireDate' in record && 'cvc' in record;
}

function isAddress(record: Record): record is Address {
	return 'street' in record && 'country' in record && 'city' in record;
}

function isNote(record: Record): record is Note {
	return 'note' in record;
}

export { isLogin, isCard, isAddress, isNote };
