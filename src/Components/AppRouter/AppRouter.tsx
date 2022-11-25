import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";

import {routesURL} from "../../Lib/Enums/router.enum";

import WatchlistPage from "../../Pages/WatchlistPage/WatchlistPage";
import FilmsPage from "../../Pages/FilmsPage/FilmsPage";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "../../Pages/MovieDatailPage/MovieDetailsPage";


const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path={routesURL.allFilms} element={<FilmsPage/>}/>
			<Route path={routesURL.movieDetails} element={<MovieDetailsPage/>}/>
			<Route path={routesURL.watchlist} element={<WatchlistPage/>}/>
			<Route path={routesURL.notFound} element={<NotFoundPage/>}/>
		</Routes>
	
	);
};

export default AppRouter;