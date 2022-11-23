import React, {FC, MouseEvent, useState} from "react";
import {Link} from "react-router-dom";
import {RiBookmarkFill, RiBookmarkLine} from "react-icons/ri";

import styles from './FilmCard.module.scss'

import BookmarkButton from "../BookmarkButton/BookmarkButton";
import {UrlEnum} from "../../Lib/Enums/url.enum";

import FilmInfo from "./FilmInfo";


interface Props {
	ID: number;
	poster_path: string | null;
	release_date: string;
	vote_average: number;
	title: string;
}

const FilmCard: FC<Props> = (props) => {
	
	const [isFavourite, setIsFavourite] = useState(false)
	
	const bookmarkClickHandler = (e: MouseEvent) => {
		e.preventDefault();
		setIsFavourite(prev => !prev)
	};
	
	return (
		<Link className={styles.filmCardContainer}
					to={`/${props.ID}`}>
			<BookmarkButton className={styles.bookmarkContainer}
											bookmarkClickHandler={bookmarkClickHandler}>
				{isFavourite ? <RiBookmarkFill/> : <RiBookmarkLine/>}
			</BookmarkButton>
			<div className={styles.imgContainer}>
				<img src={`${UrlEnum.imgURL}${props.poster_path}`}
						 alt="Film poster"/>
			</div>
			<FilmInfo release_date={props.release_date}
								vote_average={props.vote_average}
								title={props.title}/>
		</Link>
	);
};

export default FilmCard;