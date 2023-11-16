import { FullRecordType, RecordCard } from '../@types/basic-types';
import { RecordsTypes } from '../assets/consts';

const recordInfo = (record: FullRecordType) => {
	if (record.type === RecordsTypes.Login && 'name' in record) {
		return record.name;
	} else if (record.type === RecordsTypes.Card && 'cardNumber' in record) {
		return `*${record.cardNumber.slice(-4)}`;
	} else if (record.type === RecordsTypes.Address && 'street' in record) {
		return record.street;
	} else if (record.type === RecordsTypes.Note && 'note' in record) {
		return `${record.note?.slice(0, 30)}...`;
	}
};

export const toRecordCardAdapter = (records: FullRecordType[]): RecordCard[] => {
	return records.map((record) => ({
		type: record.type,
		title: record.title,
		info: recordInfo(record)!,
		isFav: record.isFav,
	}));
};
