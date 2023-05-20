import styles from './Title.module.css';

const Title = () => {
	return (
		<div className={styles.Title}>
				<img
					className={styles.Image}
					src="/public/Img/rickmortylogo.png"
					alt="Rick and Morty Title"
				/>
		</div>
	);
};
export default Title