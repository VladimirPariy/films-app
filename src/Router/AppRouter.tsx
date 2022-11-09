import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";

import {routesURL} from "../Lib/Enums/router.enum";

import Bookmark from "../Pages/bookmarkPage/Bookmark";
import Films from "../Pages/filmsPage/Films";


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