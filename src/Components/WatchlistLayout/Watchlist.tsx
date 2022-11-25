import React, {FC, MouseEvent} from "react";

import FilmsGridContainer from "../UI/FilmsGridContainer/FilmsGridContainer";
import FilmCard from "../UI/FilmCard/FilmCard";

import {useAppDispatch, useAppSelector} from "../../Store/storeTypes";
import {removeFromWatchlist, selectWatchlist} from "../../Store/Slices/WatchlistSlice";

import EmptyList from "../UI/EmptyList/EmptyList";
import Title from "../UI/TitleContainer/Title";


const Watchlist: FC = () => {
	const watchlist = useAppSelector(selectWatchlist)
	const dispatch = useAppDispatch();
	
	const watchlistClickHandler = (e: MouseEvent, ID: number) => {
		e.preventDefault();
		dispatch(removeFromWatchlist(ID))
	};
	
	return (
		<>
			<Title>
				Watchlist
			</Title>
			{watchlist.length === 0 && <EmptyList/>}
			<FilmsGridContainer>
				{watchlist.map(film => (
					<FilmCard key={film.id}
										ID={film.id}
										title={film.title}
										poster_path={film.poster_path}
										release_date={film.release_date}
										vote_average={film.vote_average}
										clickHandler={watchlistClickHandler}/>
				))}
			</FilmsGridContainer>
		</>
	);
};

export default Watchlist;
