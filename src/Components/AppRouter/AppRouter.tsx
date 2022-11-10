import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";

import {routesURL} from "../../Lib/Enums/router.enum";

import Bookmark from "../../Pages/BookmarkPage/Bookmark";
import Films from "../../Pages/FilmsPage/Films";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";


const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path={routesURL.home} element={<Films/>}/>
			<Route path={routesURL.bookmark} element={<Bookmark/>}/>
			<Route path={routesURL.anything} element={<NotFoundPage/>}/>
		</Routes>
	
	);
};

export default AppRouter;