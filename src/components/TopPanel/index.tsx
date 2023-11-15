import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import { IconButton, Tooltip } from '@mui/material';

import { ReactComponent as ArrowBack } from '../../assets/img/arrow-back-icon.svg';
import { ReactComponent as StarIcon } from '../../assets/img/star-icon.svg';
import { ReactComponent as EmptyStarIcon } from '../../assets/img/empty-star-icon.svg';

import styles from '../Listing/Listing.module.scss';

interface TopPanelProps {
	title: string;
	length?: number;
	isFav?: boolean;
	setFav?: Dispatch<SetStateAction<boolean>>;
}

export const TopPanel = ({ title, length, isFav, setFav }: TopPanelProps) => {
	const navigate = useNavigate();

	const goBackHandler = () => {
		navigate(-1);
	};

	const setFavHandler = () => {
		if (setFav) {
			setFav(!isFav);
		}
	};

	return (
		<div className={styles.panelBlock}>
			<div className={styles.leftGroup}>
				<ArrowBack onClick={goBackHandler} />
				<h3>{title}</h3>
			</div>

			{
				length
					? <span className={styles.number}>{length}</span>
					: isFav
						? (
							<Tooltip title='Убрать из избранного'>
								<IconButton onClick={setFavHandler}>
									<StarIcon className={styles.star} />
								</IconButton>
							</Tooltip>
						)
						: (
							<Tooltip title='Добавить в избранное'>
								<IconButton onClick={setFavHandler}>
									<EmptyStarIcon className={styles.star} />
								</IconButton>
							</Tooltip>
						)
			}
		</div>
	);
};
