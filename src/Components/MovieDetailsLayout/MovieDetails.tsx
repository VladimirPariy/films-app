import React, {FC, useEffect} from "react";
import {useParams} from "react-router";

import styles from './MovieDetails.module.scss';

import {useAppDispatch, useAppSelector} from "../../Store/storeTypes";
import {clearState, loadFilmDetails, selectDetails, selectDetailsError, selectIsLoadingDetails} from "../../Store/Slices/MovieDetailsSlice";

import {useCleanup} from "../../Lib/Hooks/useCleanup";

import MovieDetailsHeader from "./MovieDetailsHeader";
import PromotionalMovieDetails from "./PromotionalMovieDetails";
import ExtraMovieDetails from "./ExtraMovieDetails";
import MovieDescription from "./MovieDescription";

const MovieDetails: FC = () => {
	
	const {id} = useParams();
	
	const isLoading = useAppSelector(selectIsLoadingDetails);
	const filmDetails = useAppSelector(selectDetails);
	const error = useAppSelector(selectDetailsError);
	
	const dispatch = useAppDispatch();
	
	useEffect(() => {
		if (isLoading === 'loading') return;
		if (id) dispatch(loadFilmDetails({id}));
	}, [id, dispatch]);
	
	useCleanup(clearState);
	
	const {title, release_date, runtime, status, poster_path, trailer, genres, overview, budget, homepage, production_companies, id: ID, imdb_id} = filmDetails;
	
	
	return (
		<>
			{isLoading === 'loading' && <div>Loading...</div>}
			{error && <div>ERROR</div>}
			{Object.keys(filmDetails).length !== 0 &&
				<div className={styles.wrapper}>
					<MovieDetailsHeader title={title}
															release_date={release_date}
															runtime={runtime}
															status={status}
															ID={ID}
															imdb_id={imdb_id}/>
					<PromotionalMovieDetails poster_path={poster_path}
																	 trailer={trailer}/>
					<MovieDescription genres={genres}
														overview={overview}/>
					<ExtraMovieDetails budget={budget}
														 homepage={homepage}
														 production_companies={production_companies}/>
				</div>
			}
		</>
	);
};

export default MovieDetails;