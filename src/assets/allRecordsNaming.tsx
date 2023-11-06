import { ReactComponent as AddressIcon } from './img/address-icon.svg';
import { ReactComponent as LoginsIcon } from './img/logins-icon.svg';
import { ReactComponent as NoteIcon } from './img/note-icon.svg';
import { ReactComponent as CardsIcon } from './img/cards-icon.svg';

import { Records, RecordsTypes } from './consts';

export const recordsIcons = [<LoginsIcon />, <CardsIcon />, <AddressIcon />, <NoteIcon />];
export const recordsTypes = [Records.login, Records.card, Records.address, Records.note];
export const recordsUrls = [RecordsTypes.Login, RecordsTypes.Card, RecordsTypes.Address, RecordsTypes.Note];
