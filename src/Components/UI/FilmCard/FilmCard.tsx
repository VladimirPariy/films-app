import React, {FC, MouseEvent} from "react";
import {Link, useLocation} from "react-router-dom";
import {RiBookmarkFill, RiBookmarkLine} from "react-icons/ri";

import styles from './FilmCard.module.scss';

import {UrlEnum} from "../../../Lib/Enums/url.enum";
import {useHasInWatchlist} from "../../../Lib/Hooks/useHasInWatchlist";

import AddInWatchlistBtn from "../AddInWatchlistBtn/AddInWatchlistBtn";
import FilmInfo from "./FilmInfo";


interface Props {
	ID: number;
	poster_path: string | null;
	release_date: string;
	vote_average: number;
	title: string;
	clickHandler: (e: MouseEvent, ID: number) => void;
}

const FilmCard: FC<Props> = (props) => {
	
	const hasInWatchlist = useHasInWatchlist(props.ID);
	const location = useLocation();
	
	return (
		<Link className={styles.filmCardContainer}
					to={location.pathname === '/watchlist' ? `${props.ID}` : `movie/${props.ID}`}>
			<AddInWatchlistBtn className={styles.bookmarkContainer}
												 clickHandler={props.clickHandler}
												 ID={props.ID}>
				{hasInWatchlist ? <RiBookmarkFill/> : <RiBookmarkLine/>}
			</AddInWatchlistBtn>
			<div className={styles.imgContainer}>
				<img src={`${UrlEnum.imgURL}${props.poster_path}`}
						 alt="Movie poster" loading="lazy"/>
			</div>
			<FilmInfo release_date={props.release_date}
								vote_average={props.vote_average}
								title={props.title}/>
		</Link>
	);
};

export default FilmCard;