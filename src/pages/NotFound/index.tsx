import { useNavigate } from 'react-router-dom';

import { Logo } from '../../components';

import { ReactComponent as NotFoundImg } from '../../assets/img/not-found.svg';

import styles from './NotFound.module.scss';

export const NotFound = () => {
	const navigate = useNavigate();

	const homeButtonClickHandler = () => {
		navigate('/');
	};

	return (
		<div className={styles.root}>
			<Logo />
			<NotFoundImg />

			<section className={styles.textSection}>
				<h2>
					404<br />
					Страница не найдена
				</h2>
				<p>Страницы, на которую вы попали, не существует.<br />Проверьте правильность введенного адреса.</p>
			</section>

			<button className={styles.outlinedButton} onClick={homeButtonClickHandler}>В Хранилище</button>

		</div>
	);
};
