import { TextField } from '@mui/material';

export const AddressRecordForm = () => {
	return (
		<>
			<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
			           label='Название' placeholder='Новая запись' required
			           InputLabelProps={{
				           shrink: true,
			           }} />

			<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
			           label='Страна' placeholder='Страна' required
			           InputLabelProps={{
				           shrink: true,
			           }} />

			<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
			           label='Индекс' placeholder='Индекс'
			           InputLabelProps={{
				           shrink: true,
			           }} />

			<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
			           label='Регион' placeholder='Регион'
			           InputLabelProps={{
				           shrink: true,
			           }} />

			<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
			           label='Город' placeholder='Город' required
			           InputLabelProps={{
				           shrink: true,
			           }} />

			<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
			           label='Улица' placeholder='Улица' required
			           InputLabelProps={{
				           shrink: true,
			           }} />

			<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
			           label='Дом' placeholder='Дом'
			           InputLabelProps={{
				           shrink: true,
			           }} />

			<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
			           label='Корпус' placeholder='Корпус'
			           InputLabelProps={{
				           shrink: true,
			           }} />

			<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
			           label='Подъезд' placeholder='Подъезд'
			           InputLabelProps={{
				           shrink: true,
			           }} />

			<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
			           label='Квартира' placeholder='Квартира'
			           InputLabelProps={{
				           shrink: true,
			           }} />

			<TextField inputProps={{ maxLength: 100 }} error={false} helperText={''} variant='standard'
			           label='Заметка' placeholder='Заметка'
			           InputLabelProps={{
				           shrink: true,
			           }} />
		</>
	);
};
