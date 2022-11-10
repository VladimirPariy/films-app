import React, {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../Store/storeTypes";
import {loadFilms, selectAllFilms, selectCurrentPage, selectError, selectIsLoading, selectTotalPageCount} from "../../Store/Slices/FilmsSlice";
import FilmCard from "../FilmCard/FilmCard";


const FilmsList: FC = () => {
	const films = useAppSelector(selectAllFilms);
	const isLoading = useAppSelector(selectIsLoading);
	const currentPage = useAppSelector(selectCurrentPage);
	const totalPage = useAppSelector(selectTotalPageCount);
	const error = useAppSelector(selectError);
	
	
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		dispatch(loadFilms({page: 1, category: 'popular'}))
	}, [])
	
	
	return (
		<div>
			{error && <div>ERROR</div>}
			{films.map(film => (
				<FilmCard key={film.id}
									title={film.title}
									poster_path={film.poster_path}
									release_date={film.release_date}
									vote_average={film.vote_average}/>
			))}
			{isLoading === 'loading' && <div>Loading...</div>}
		</div>
	);
};

export default FilmsList;