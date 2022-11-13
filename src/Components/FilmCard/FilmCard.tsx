import React, {FC} from "react";
import styles from './FilmCard.module.scss'

interface Props {
	poster_path: string;
	release_date: string;
	vote_average: number;
	title: string;
}

const FilmCard: FC<Props> = (props) => {
	
	return (
		<div className={styles.filmCardContainer}>
			<div className={styles.imgContainer}>
				<img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt="Film poster"/>
			</div>
			<div className={styles.extraInfoWrapper}>
				<div>{props.release_date.slice(0, 4)}</div>
				<div>{props.vote_average}</div>
			</div>
			<div className={styles.filmTitle}>
				{props.title}
			</div>
		</div>
	);
};

export default FilmCard;