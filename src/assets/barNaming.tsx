import { Sections, SectionsUrls } from './consts';

import { ReactComponent as StorageIcon } from './img/storage-icon.svg';
import { ReactComponent as ShareIcon } from './img/share-icon.svg';
import { ReactComponent as GenerateIcon } from './img/generate-icon.svg';
import { ReactComponent as SettingsIcon } from './img/settings-icon.svg';

export const icons = [<StorageIcon />, <ShareIcon />, <GenerateIcon />, <SettingsIcon />];
export const sections = [Sections.Storage, Sections.Share, Sections.Generator, Sections.Settings];
export const sectionsUrls = [SectionsUrls.Storage, SectionsUrls.Share, SectionsUrls.Generator, SectionsUrls.Settings];
