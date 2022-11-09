import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";

import {routesURL} from "../Lib/Enums/routerEnum";

import Bookmark from "../Pages/bookmark.page/Bookmark";
import Films from "../Pages/films.page/Films";


const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path={routesURL.home} element={<Films/>}/>
			<Route path={routesURL.bookmark} element={<Bookmark/>}/>
			<Route path={routesURL.anything} element={<Films/>}/>
		</Routes>
	
	);
};

export default AppRouter;