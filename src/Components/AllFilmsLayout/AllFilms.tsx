import React, {FC, lazy, MouseEvent, Suspense, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../Store/storeTypes";
import {loadFilms, selectAllFilms, selectCurrentPage, selectError, selectIsLoading} from "../../Store/Slices/FilmsSlice";
import {addInWatchlist, removeFromWatchlist, selectWatchlist} from "../../Store/Slices/WatchlistSlice";

import Loader from "../UI/Loader/Loader";
import Container from "../UI/Container/Container";
import FilmsGridContainer from "../UI/FilmsGridContainer/FilmsGridContainer";
import Title from "../UI/TitleContainer/Title";

const Error = lazy(() => import ("../UI/Error/Error"));
const FilmCard = lazy(() => import ("../UI/FilmCard/FilmCard"));


const AllFilms: FC = () => {
	const films = useAppSelector(selectAllFilms);
	const isLoading = useAppSelector(selectIsLoading);
	const error = useAppSelector(selectError);
	const currentPage = useAppSelector(selectCurrentPage);
	const watchlist = useAppSelector(selectWatchlist);
	
	const dispatch = useAppDispatch();
	
	const countFilmsPerPage = 20;
	
	useEffect(() => {
		if (isLoading === 'loading') return;
		if (films.length === 0 || films.length !== currentPage * countFilmsPerPage) {
			dispatch(loadFilms({currentPage}));
		}
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, dispatch]);
	
	const watchlistClickHandler = (e: MouseEvent, ID: number) => {
		e.preventDefault();
		const hasInWatchlist = !!watchlist.find(film => film.id === ID)
		hasInWatchlist ? dispatch(removeFromWatchlist(ID)) : dispatch(addInWatchlist(films.find(movie => movie.id === ID)))
	};
	
	return (
		<>
			{error &&
				<Container condition={films.length === 0}>
					<Suspense fallback={<Loader/>}>
						<Error error={error}/>
					</Suspense>
				</Container>
			}
			{films.length > 0 && (
				<>
					<Title>
						Most popular
					</Title>
					<FilmsGridContainer>
						<Suspense fallback={<Loader/>}>
							{films.map(movie => (
								<FilmCard key={movie.id}
													ID={movie.id}
													title={movie.title}
													poster_path={movie.poster_path}
													release_date={movie.release_date}
													vote_average={movie.vote_average}
													clickHandler={watchlistClickHandler}/>
							))}
						</Suspense>
					</FilmsGridContainer>
				</>
			)}
			{isLoading === 'loading' &&
				<Container condition={films.length === 0}>
					<Loader/>
				</Container>
			}
		</>
	);
};

export default AllFilms;