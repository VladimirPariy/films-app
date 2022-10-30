import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import Bookmark from "../bookmark/Bookmark";
import Main from "../main/Main";
import {routesURL} from "../../lib/routerEnum";


const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path={routesURL.home} element={<Main/>}/>
			<Route path={routesURL.bookmark} element={<Bookmark/>}/>
			<Route path={routesURL.anything} element={<Main/>}/>
		</Routes>
	
	);
};

export default AppRouter;