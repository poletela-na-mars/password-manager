import { Box, Fade, IconButton, Modal } from '@mui/material';

import { ReactComponent as CloseIcon } from '../../assets/img/close-icon.svg';

import styles from './ModalWindow.module.scss';

// TODO - unify modal window

type ModalWindowProps = {
	openPopup: boolean;
	closePopupHandler: () => void;
	actionHandler: () => void;
	text: string;
	error: boolean;
};

export const ModalWindow = ({ openPopup, closePopupHandler, actionHandler, text, error }: ModalWindowProps) => {
	const styleBoxPopup = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 'lg',
		bgcolor: 'background.paper',
		borderRadius: 3,
		whiteSpace: 'pre-wrap',
		outline: 'none',
		p: 1,
		pb: 4
	};

	return (
		<Modal
			aria-labelledby='modal-question'
			open={openPopup}
			onClose={closePopupHandler}
			closeAfterTransition
		>
			<Fade in={openPopup}>
				<Box sx={styleBoxPopup}>

					<IconButton className={styles.closeIcon} onClick={closePopupHandler}>
						<CloseIcon />
					</IconButton>

					<h3 className={styles.modalTitle} id='modal-question'>{text}</h3>
					<div className={styles.buttonsContainer}>
						{
							error
								?
								<button className={styles.modalButton} onClick={closePopupHandler}>
									Закрыть
								</button>
								: (
									<>
										<button className={styles.modalButton} onClick={actionHandler}>
											Да
										</button>
										<button className={styles.modalButton} onClick={closePopupHandler}>
											Нет
										</button>
									</>
								)
						}
					</div>

				</Box>
			</Fade>
		</Modal>
	);
};
