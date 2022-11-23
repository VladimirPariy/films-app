import React, {FC, MouseEvent} from "react";
import {Link} from "react-router-dom";
import {RiBookmarkLine} from "react-icons/ri";

import styles from './FilmCard.module.scss'

import BookmarkButton from "../BookmarkButton/BookmarkButton";
import {UrlEnum} from "../../Lib/Enums/url.enum";

//RiBookmarkFill
interface Props {
	ID: number;
	poster_path: string | null;
	release_date: string;
	vote_average: number;
	title: string;
}

const FilmCard: FC<Props> = (props) => {
	
	const bookmarkClickHandler = (e: MouseEvent) => {
		e.preventDefault()
	}
	
	return (
		<Link className={styles.filmCardContainer} to={`/${props.ID}`}>
			<BookmarkButton className={styles.bookmarkContainer} bookmarkClickHandler={bookmarkClickHandler}>
				<RiBookmarkLine/>
			</BookmarkButton>
			<div className={styles.imgContainer}>
				<img src={`${UrlEnum.imgURL}${props.poster_path}`} alt="Film poster"/>
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