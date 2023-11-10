import { TextField } from '@mui/material';

import InputMask from 'react-input-mask';

export const CardRecordForm = () => {
	return (
		<>
			<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
			           label='Название' placeholder='Новая запись' required
			           InputLabelProps={{
				           shrink: true,
			           }} />

			<TextField inputProps={{ maxLength: 40, style: { textTransform: 'uppercase' } }} error={false} helperText={''}
			           variant='standard'
			           label='Имя владельца' placeholder='Имя владельца'
			           InputLabelProps={{
				           shrink: true,
			           }} />

			<InputMask mask='9999 9999 9999 9999' disabled={false}>
				{
					<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
					           label='Номер карты' placeholder='XXXX XXXX XXXX XXXX' required
					           InputLabelProps={{
						           shrink: true,
					           }} />
				}
			</InputMask>


			<InputMask mask='99/99' disabled={false}>
				{
					<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
					           label='Месяц/Год' placeholder='XX/XX' required
					           InputLabelProps={{
						           shrink: true,
					           }} />
				}
			</InputMask>


			<InputMask mask='999' disabled={false}>
				{
					<TextField inputProps={{ maxLength: 10 }} error={false} helperText={''} variant='standard'
					           label='CVC' placeholder='XXX' required
					           InputLabelProps={{
						           shrink: true,
					           }} />
				}
			</InputMask>
		</>
	);
};
