import React, {FC, lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import {routesURL} from "../../Lib/Enums/router.enum";
import Container from "../UI/Container/Container";
import Loader from "../UI/Loader/Loader";

const MovieDetailsPage = lazy(() => import ("../../Pages/MovieDetailPage/MovieDetailsPage"));
const WatchlistPage = lazy(() => import ("../../Pages/WatchlistPage/WatchlistPage"));
const NotFoundPage = lazy(() => import ("../../Pages/NotFoundPage/NotFoundPage"));
const FilmsPage = lazy(() => import ("../../Pages/FilmsPage/FilmsPage"));
const RegistrationPage = lazy(() => import ("../../Pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(()=> import("../../Pages/LoginPage/LoginPage"));

const AppRouter: FC = () => {
	return (
		<Suspense fallback={<Container condition={true}><Loader/></Container>}>
			<Routes>
				<Route path={routesURL.allFilms} element={<FilmsPage/>}/>
				<Route path={routesURL.movieDetails} element={<MovieDetailsPage/>}/>
				<Route path={routesURL.watchlist}>
					<Route path={routesURL.watchlist} element={<WatchlistPage/>}/>
					<Route path={routesURL.watchlistMovieDetails} element={<MovieDetailsPage/>}/>
				</Route>
				<Route path={routesURL.registration} element={<RegistrationPage/>}/>
				<Route path={routesURL.login} element={<LoginPage/>}/>
				<Route path={routesURL.notFound} element={<NotFoundPage/>}/>
			</Routes>
		</Suspense>
	
	);
};

export default AppRouter;