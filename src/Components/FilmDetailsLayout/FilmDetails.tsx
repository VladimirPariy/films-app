import React, {FC} from "react";

import styles from './FilmDetails.module.scss';

import {IFilmDetails} from "../../Lib/Interfaces/FilmDetails.interface";
import {getTime} from "../../Lib/Utils/getTime";
import {getTrailer} from "../../Lib/Utils/getTrailer";


interface Props extends IFilmDetails {
}

const FilmDetails: FC<Props> = (props) => {
	
	const trailer = getTrailer(props.trailer.results);
	const runTime = getTime(props.runtime);
	
	return (
		<div className={styles.wrapper}>
			<div className={styles.headerPart}>
				<div className={styles.title}>{props.title}</div>
				<span className={styles.releaseDate}>{props.release_date.slice(0, 4)}</span>
				{props.runtime &&
					<span className={styles.runtime}>{runTime}</span>}
				<div className={styles.filmStatus}>Status: {props.status}</div>
			</div>
			<div className={styles.interactivePart}>
				{props.poster_path &&
					<img className={styles.poster}
							 src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
							 alt="poster"/>}
				{trailer &&
					<iframe src={`https://www.youtube.com/embed/${trailer.key}`}
									allowFullScreen
									title="video"
									className={styles.trailer}/>}
			</div>
			
			<div className={styles.genresContainer}>
				{props.genres.map((genre, index) => (
					<span className={styles.genreName} key={genre.id}>{genre.name}</span>
				))}
			</div>
			{props.overview &&
				<div className={styles.description}>{props.overview}</div>}
			
			<div className={styles.extraPart}>
				<div className={styles.companiesContainer}>
					<span>Production companies:</span>
					{props.production_companies.map(company => (
						<div className={styles.companyName} key={company.id}>{company.name}</div>
					))}
				</div>
				<div className={styles.budget}><span>Budget: </span><span>{props.budget}$</span></div>
				{props.homepage &&
					<a className={styles.homepage} href={props.homepage} target='_blank' rel="noreferrer">{props.homepage}</a>}
			</div>
		</div>
	);
};

export default FilmDetails;