import React, {FC} from "react";

import styles from "./MovieDetails.module.scss";

import {IGenres} from "../../Lib/Interfaces/MovieDetails.interface";

interface Props {
	genres: IGenres[];
	overview: string | null;
}

const MovieDescription: FC<Props> = (props) => {
	return (
		<>
			<div className={styles.genresContainer}>
				{props.genres.map((genre) => (
					<span className={styles.genreName} key={genre.id}>{genre.name}</span>
				))}
			</div>
			{props.overview &&
				<div className={styles.description}>{props.overview}</div>
			}
		</>
	);
};

export default MovieDescription;