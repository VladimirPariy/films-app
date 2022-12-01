import React, {FC, MouseEvent} from "react";

import styles from "./MovieDetails.module.scss";

import {useAppDispatch} from "../../Store/storeTypes";
import {addInWatchlist, removeFromWatchlist} from "../../Store/Slices/WatchlistSlice";

import {getTime} from "../../Lib/Utils/getTime";
import ImdbAPI from "../../Lib/api/imdbAPI";
import {useHasInWatchlist} from "../../Lib/Hooks/useHasInWatchlist";

import AddInWatchlistBtn from "../UI/AddInWatchlistBtn/AddInWatchlistBtn";

interface Props {
	title: string;
	release_date: string;
	runtime: number | null;
	status: string;
	ID: number;
	imdb_id: string | null;
}

const MovieDetailsHeader: FC<Props> = (props) => {
	const dispatch = useAppDispatch();
	const hasInWatchlist = useHasInWatchlist(props.ID);
	
	const runTime = getTime(props.runtime);
	
	const watchlistClickHandler = async (e: MouseEvent, ID: number) => {
		e.preventDefault();
		if (props.imdb_id) {
			const movie = await ImdbAPI.findMovie(props.imdb_id);
			hasInWatchlist ? dispatch(removeFromWatchlist(ID)) : dispatch(addInWatchlist(movie[0]));
		}
	};
	
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
				<AddInWatchlistBtn className={styles.bookmark}
													 clickHandler={watchlistClickHandler} ID={props.ID}>
					{hasInWatchlist ?
						<span>
							<span>&#10003;</span>
							In Watchlist
						</span> :
						<span>
							<span>+</span>
							Add to Watchlist
						</span>}
				</AddInWatchlistBtn>
			</div>
		</div>
	);
};

export default MovieDetailsHeader;