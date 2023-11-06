import { ReactComponent as ArrowBack } from '../../assets/img/arrow-back-icon.svg';

import styles from './Listing.module.scss';
import { useNavigate } from 'react-router-dom';

interface TopPanelProps {
	title: string;
	length: number;
}

export const TopPanel = ({ title, length }: TopPanelProps) => {
	const navigate = useNavigate();

	const goBackHandler = () => {
		navigate(-1);
	};

	return (
		<div className={styles.panelBlock}>
			<div className={styles.leftGroup}>
				<ArrowBack onClick={goBackHandler} />
				<h3>{title}</h3>
			</div>
			<span className={styles.number}>{length}</span>
		</div>
	);
};
