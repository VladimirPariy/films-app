import React, {FC, lazy, MouseEvent, Suspense} from "react";

import FilmsGridContainer from "../UI/FilmsGridContainer/FilmsGridContainer";
import FilmCard from "../UI/FilmCard/FilmCard";

import {useAppDispatch, useAppSelector} from "../../Store/storeTypes";
import {removeFromWatchlist, selectWatchlist} from "../../Store/Slices/WatchlistSlice";

import Title from "../UI/TitleContainer/Title";
import Loader from "../UI/Loader/Loader";
import Container from "../UI/Container/Container";

const EmptyList = lazy(() => import ("../UI/EmptyList/EmptyList"));


const Watchlist: FC = () => {
	const watchlist = useAppSelector(selectWatchlist);
	const dispatch = useAppDispatch();
	
	const watchlistClickHandler = (e: MouseEvent, ID: number) => {
		e.preventDefault();
		dispatch(removeFromWatchlist(ID));
	};
	
	return (
		<div>
			<Title>
				Watchlist
			</Title>
			<Suspense fallback={<Container condition={true}><Loader/></Container>}>
				{watchlist.length === 0 && <EmptyList/>}
			</Suspense>
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
		</div>
	);
};

export default Watchlist;
