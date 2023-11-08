import { TextField } from '@mui/material';

export const NoteRecordForm = () => {
	return (
		<>
			<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
			           label='Название' placeholder='Новая запись' required
			           InputLabelProps={{
				           shrink: true,
			           }} />

			<TextField inputProps={{ maxLength: 500 }} error={false} helperText={''} variant='outlined'
			           label='Заметка' placeholder='Заметка' required
			           multiline
			           minRows={4}
			           maxRows={20}
			           InputLabelProps={{
				           shrink: true,
			           }} />
		</>
	);
};
