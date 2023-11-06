import { ReactComponent as AddressIcon } from './img/address-icon.svg';
import { ReactComponent as LoginsIcon } from './img/logins-icon.svg';
import { ReactComponent as NoteIcon } from './img/note-icon.svg';
import { ReactComponent as CardsIcon } from './img/cards-icon.svg';

import { RecordsTypes } from './consts';

export const mappingRecordTypeToIcon = {
	[RecordsTypes.Login]: <LoginsIcon />,
	[RecordsTypes.Card]: <CardsIcon />,
	[RecordsTypes.Address]: <AddressIcon />,
	[RecordsTypes.Note]: <NoteIcon />,
};
