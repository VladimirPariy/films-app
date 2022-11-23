import React, {FC} from "react";

import FilmsList from "../../Components/FilmsList/FilmsList";
import Observer from "../../Components/Observer/Observer";

const Films: FC = () => {
	return (
		<>
			<FilmsList/>
			<Observer/>
		</>
	);
};

export default Films;