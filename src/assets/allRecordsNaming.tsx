import { ReactComponent as AddressIcon } from './img/address-icon.svg';
import { ReactComponent as LoginsIcon } from './img/logins-icon.svg';
import { ReactComponent as NoteIcon } from './img/note-icon.svg';
import { ReactComponent as CardsIcon } from './img/cards-icon.svg';

import { Records, RecordsUrls } from './consts';

export const recordsIcons = [<LoginsIcon />, <CardsIcon />, <AddressIcon />, <NoteIcon />];
export const recordsTypes = [Records.Login, Records.Card, Records.Address, Records.Note];
export const recordsUrls = [RecordsUrls.Login, RecordsUrls.Card, RecordsUrls.Address, RecordsUrls.Note];
