import React, {FC} from "react";

import styles from './FilmDetails.module.scss';

import {IFilmDetails} from "../../Lib/Interfaces/FilmDetails.interface";
import {getTime} from "../../Lib/Utils/getTime";
import {getTrailer} from "../../Lib/Utils/getTrailer";
import {UrlEnum} from "../../Lib/Enums/url.enum";


interface Props extends IFilmDetails {
}

const FilmDetails: FC<Props> = (props) => {
	
	const trailer = getTrailer(props.trailer.results);
	const runTime = getTime(props.runtime);
	const budgetSum = props.budget.toString().split('').reverse().map((item, index) => {
		if (index === 0) return item
		return (index % 3 === 0) ? item = `${item},` : item
	}).reverse().join('')
	
	return (
		<div className={styles.wrapper}>
			<div className={styles.headerPart}>
				<div className={styles.title}>{props.title}</div>
				<div className={styles.subtitle}>
					<span className={styles.releaseDate}>{props.release_date.slice(0, 4)}</span>
					{props.runtime &&
						<span className={styles.runtime}>{runTime}</span>
					}
					<div className={styles.filmStatus}><span className={styles.statusTitle}>Status:</span>{props.status}</div>
				</div>
			
			</div>
			<div className={styles.interactivePart}>
				{props.poster_path &&
					<img className={styles.poster}
							 src={`${UrlEnum.imgURL}${props.poster_path}`}
							 alt="poster"/>
				}
				{trailer &&
					<iframe src={`${UrlEnum.trailerURL}${trailer.key}`}
									allowFullScreen
									title="video"
									className={styles.trailer}/>
				}
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
					<span className={styles.titleCompany}>Production companies:</span>
					<span className={styles.companyName}>{props.production_companies.map(company => company.name).join(', ')}</span>
				</div>
				{props.budget > 0 &&
					<div className={styles.budget}>
						<span className={styles.titleBudget}>Budget: </span>
						<span className={styles.budgetSum}>{budgetSum}$</span>
					</div>
				}
				{props.homepage &&
					<div className={styles.homepage}>
						<span className={styles.titleWebsite}>Website:</span>
						<a className={styles.website} href={props.homepage} target='_blank' rel="noreferrer">{props.homepage}</a>
					</div>
				}
			</div>
		</div>
	);
};

export default FilmDetails;