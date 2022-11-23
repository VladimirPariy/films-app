import React, {FC} from "react";

import styles from "./MovieDetails.module.scss";

import {getTime} from "../../Lib/Utils/getTime";

interface Props {
	title: string;
	release_date: string;
	runtime: number | null;
	status: string;
	ID: string | undefined;
}

const MovieDetailsHeader: FC<Props> = (props) => {
	
	const runTime = getTime(props.runtime);
	
	// const [isFavourite, setIsFavourite] = useState(false)
	// const bookmarkClickHandler = (e: MouseEvent) => {
	// 	e.preventDefault();
	// 	// setIsFavourite(prev => !prev)
	// };
	return (
		<div className={styles.headerPart}>
			<div className={styles.title}>{props.title}</div>
			<div>
				<div className={styles.subtitle}>
					<span className={styles.releaseDate}>{props.release_date.slice(0, 4)}</span>
					{props.runtime &&
						<span className={styles.runtime}>{runTime}</span>
					}
					<div className={styles.filmStatus}>
						<span className={styles.statusTitle}>Status:</span>
						{props.status}
					</div>
				</div>
				{/*<WatchlistButton className={styles.bookmark}*/}
				{/*								 bookmarkClickHandler={bookmarkClickHandler}>*/}
				{/*	{isFavourite ? <span><span>&#10003;</span>In Watchlist</span> : <span><span>+</span>Add to Watchlist</span>}*/}
				{/*</WatchlistButton>*/}
			</div>
		</div>
	);
};

export default MovieDetailsHeader;