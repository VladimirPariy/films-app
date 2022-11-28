import React, {FC, lazy, Suspense, useEffect} from "react";
import {useParams} from "react-router";

import styles from './MovieDetails.module.scss'

import {useAppDispatch, useAppSelector} from "../../Store/storeTypes";
import {clearState, loadMovieDetails, selectDetails, selectDetailsError, selectIsLoadingDetails} from "../../Store/Slices/MovieDetailsSlice";

import {useCleanup} from "../../Lib/Hooks/useCleanup";

import Loader from "../UI/Loader/Loader";
import MovieDetailsHeader from "./MovieDetailsHeader";
import PromotionalMovieDetails from "./PromotionalMovieDetails";
import MovieDescription from "./MovieDescription";
import ExtraMovieDetails from "./ExtraMovieDetails";
import Container from "../UI/Container/Container";

const Error = lazy(() => import ("../UI/Error/Error"));

const MovieDetails: FC = () => {
	
	const {id} = useParams();
	
	const isLoading = useAppSelector(selectIsLoadingDetails);
	const movieDetails = useAppSelector(selectDetails);
	const error = useAppSelector(selectDetailsError);
	
	const dispatch = useAppDispatch();
	
	useEffect(() => {
		if (isLoading === 'loading') return;
		if (id) dispatch(loadMovieDetails({id}));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, dispatch]);
	
	useCleanup(clearState);
	
	const {title, release_date, runtime, status, poster_path, videos, genres, overview, budget, homepage, production_companies, id: ID, imdb_id} = movieDetails;
	return (
		<>
			{isLoading === 'loading' &&
				<Container condition={Object.keys(movieDetails).length === 0}>
					<Loader/>
				</Container>
			}
			{error &&
				<Container condition={Object.keys(movieDetails).length === 0}>
					<Suspense fallback={<Loader/>}>
						<Error error={error}/>
					</Suspense>
				</Container>
			}
			{Object.keys(movieDetails).length !== 0 &&
				<div className={styles.wrapper}>
					<MovieDetailsHeader title={title}
															release_date={release_date}
															runtime={runtime}
															status={status}
															ID={ID}
															imdb_id={imdb_id}/>
					<PromotionalMovieDetails poster_path={poster_path}
																	 trailer={videos}/>
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