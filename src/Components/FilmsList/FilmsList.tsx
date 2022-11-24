import React, {FC, MouseEvent, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../Store/storeTypes";
import {loadFilms, selectAllFilms, selectCurrentPage, selectError, selectIsLoading} from "../../Store/Slices/FilmsSlice";
import {addInWatchlist, removeFromWatchlist, selectWatchlist} from "../../Store/Slices/WatchlistSlice";

import FilmCard from "../FilmCard/FilmCard";
import FilmListContainer from "../FilmListContainer/FilmListContainer";


const FilmsList: FC = () => {
	const films = useAppSelector(selectAllFilms);
	const isLoading = useAppSelector(selectIsLoading);
	const error = useAppSelector(selectError);
	const currentPage = useAppSelector(selectCurrentPage);
	
	const watchlist = useAppSelector(selectWatchlist);
	
	const dispatch = useAppDispatch();
	
	const filmCountOnPage = 20;
	
	useEffect(() => {
		if (isLoading === 'loading') return;
		if (films.length === 0 || films.length !== currentPage * filmCountOnPage) dispatch(loadFilms({currentPage}));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, dispatch]);
	
	const watchlistClickHandler = (e: MouseEvent, ID: number) => {
		e.preventDefault();
		const hasInWatchlist = !!watchlist.find(film => film.id === ID)
		hasInWatchlist ? dispatch(removeFromWatchlist(ID)) : dispatch(addInWatchlist(films.find(film => film.id === ID)))
	};
	
	// useCleanup(clearState);
	return (
		<>
			{error && <div>ERROR</div>}
			{films.length > 0 &&
				<FilmListContainer title={'Most popular'}>
					{films.map(film => (
						<FilmCard key={film.id}
											ID={film.id}
											title={film.title}
											poster_path={film.poster_path}
											release_date={film.release_date}
											vote_average={film.vote_average}
											clickHandler={watchlistClickHandler}/>
					))}
				</FilmListContainer>
			}
			{isLoading === 'loading' && <div>Loading...</div>}
		</>
	);
};

export default FilmsList;