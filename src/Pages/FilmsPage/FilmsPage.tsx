import React, {FC, lazy, Suspense} from "react";

import AllFilms from "../../Components/AllFilmsLayout/AllFilms";
import Loader from "../../Components/UI/Loader/Loader";

const Observer = lazy(() => import ("../../Components/Observer/Observer"));

const FilmsPage: FC = () => {
	return (
		<>
			<AllFilms/>
			<Suspense fallback={<Loader/>}>
				<Observer/>
			</Suspense>
		</>
	);
};

export default FilmsPage;