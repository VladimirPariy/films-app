import React, {FC} from "react";

import FilmsList from "../../Components/FilmsList/FilmsList";
import Observer from "../../Components/Observer/Observer";

const FilmsPage: FC = () => {
	return (
		<>
			<FilmsList/>
			<Observer/>
		</>
	);
};

export default FilmsPage;