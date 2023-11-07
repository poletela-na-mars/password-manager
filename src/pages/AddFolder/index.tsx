import { useState } from 'react';

import { TextField } from '@mui/material';

import { TopPanel } from '../../components';

import styles from './AddFolder.module.scss';

// TODO - show errors from back (error + helpertext)
// TODO - react-hook-form
// TODO - add logic

export const AddFolder = () => {
	const [isFav, setFav] = useState(false);

	return (
		<>
			<TopPanel title='Добавление новой папки' isFav={isFav} setFav={setFav} />
			<div className={styles.container}>
				<form>
					<TextField inputProps={{ maxLength: 40 }} error={false} helperText={''} variant='standard'
					           label='Название' placeholder='Новая папка' required
					           InputLabelProps={{
						           shrink: true,
					           }} />

					<button className={styles.submitButton} type='submit' disabled={false}>
						Сохранить
					</button>
				</form>
			</div>
		</>
	);
};
