import React, {FC, ReactNode} from "react";
import styles from './FilmListContainer.module.scss';

interface Props {
	title: string;
	children: ReactNode;
}

const FilmListContainer: FC<Props> = (props) => {
	return (
		<>
			<div className={styles.filmsTitle}>
				{props.title}
			</div>
			<div className={styles.filmsList}>
				{props.children}
			</div>
		</>
	);
};

export default FilmListContainer;