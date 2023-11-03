import styles from './PasswordsStats.module.scss';

// TODO - data from Redux
// TODO - add page with stats

export const PasswordsStats = () => {
	return (
		<div className={styles.root}>
			<h3>Проверка паролей</h3>
			<div className={styles.block}>

				<div className={styles.element}>
					<span className={styles.number}>3</span>
					<span className={styles.all}>всего паролей</span>
				</div>

				<div className={styles.element}>
					<span className={styles.number}>1</span>
					<span>сильных</span>
				</div>

				<div className={styles.element}>
					<span className={`${styles.number} ${styles.warning}`}>1</span>
					<span>слабых</span>
				</div>

				<div className={styles.element}>
					<span className={`${styles.number} ${styles.warning}`}>1</span>
					<span>скомпрометированы</span>
				</div>

			</div>
		</div>
	);
};
