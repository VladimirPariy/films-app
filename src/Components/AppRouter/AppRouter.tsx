import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";

import {routesURL} from "../../Lib/Enums/router.enum";

import Bookmark from "../../Pages/BookmarkPage/Bookmark";
import Films from "../../Pages/FilmsPage/Films";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import FilmDetailsPage from "../../Pages/FilmDatailPage/FilmDetailsPage";


const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path={routesURL.home} element={<Films/>}/>
			<Route path={routesURL.filmByID} element={<FilmDetailsPage/>}/>
			<Route path={routesURL.bookmark} element={<Bookmark/>}/>
			<Route path={routesURL.notFound} element={<NotFoundPage/>}/>
		</Routes>
	
	);
};

export default AppRouter;