import { IconButton, InputAdornment, TextField } from '@mui/material';

import { copyContent } from '../../utils/copyContent';

import { ReactComponent as CopyIcon } from '../../assets/img/copy-icon.svg';

import { Note } from '../../@types/basic-types';

interface NoteRecordViewProps {
	record: Note;
}

export const NoteRecordView = ({ record }: NoteRecordViewProps) => {
	return (
		<>
			<TextField
				label='Заметка'
				variant='outlined'
				multiline
				minRows={4}
				maxRows={20}
				defaultValue={record.note}
				InputProps={{
					readOnly: true,
					endAdornment:
						<InputAdornment sx={{ marginBottom: '14px' }} position='end'>
							<IconButton onClick={() => copyContent(record.note)}>
								<CopyIcon />
							</IconButton>
						</InputAdornment>
				}}
			/></>
	);
};
