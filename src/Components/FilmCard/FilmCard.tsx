import React, {FC} from "react";
import {Link} from "react-router-dom";

import styles from './FilmCard.module.scss'

interface Props {
	ID: number;
	poster_path: string | null;
	release_date: string;
	vote_average: number;
	title: string;
}

const FilmCard: FC<Props> = (props) => {
	
	return (
		<Link className={styles.filmCardContainer} to={`/${props.ID}`}>
			<div className={styles.imgContainer}>
				<img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt="Film poster"/>
			</div>
			<div className={styles.extraInfoWrapper}>
				<div>{props.release_date ? props.release_date.slice(0, 4) : 'Release date not announced'}</div>
				<div>{props.vote_average}</div>
			</div>
			<div className={styles.filmTitle}>
				{props.title}
			</div>
		</Link>
	);
};

export default FilmCard;