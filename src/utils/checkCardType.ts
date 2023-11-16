import { FolderCard, RecordCard } from '../@types/basic-types';

function isRecordCard(card: RecordCard | FolderCard): card is RecordCard {
	return 'info' in card && 'type' in card && 'title' in card && 'isFav' in card;
}

function isFolderCard(card: FolderCard | RecordCard): card is FolderCard {
	return 'title' in card && 'isFav' in card;
}

export { isFolderCard, isRecordCard };
