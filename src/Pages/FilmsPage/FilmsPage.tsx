import React, {FC} from "react";

import AllFilms from "../../Components/AllFilmsLayout/AllFilms";
import Observer from "../../Components/Observer/Observer";


const FilmsPage: FC = () => {
	return (
		<>
			<AllFilms/>
			<Observer/>
		</>
	);
};

export default FilmsPage;