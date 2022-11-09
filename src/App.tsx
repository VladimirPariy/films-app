import React, {FC} from "react";
import styles from './App.module.scss'

import Main from "./Layout/main/Main";
import Sidebar from "./Layout/sidebar/Sidebar";
import {loadFilms} from "./Feature/FetchedFilms/FetchedFilmsSlice";

const App: FC = () => {
	// const f = async () => {
	// 	console.log(await fetchingFilms())
	// }
	
	const data = loadFilms({category: 'popular', api_key: '5544770752199f4dbbbbebdebba5cdad', page: 1})
	console.log(data)
	return (
		<div className={styles.wrapper}>
			<Sidebar/>
			<Main/>
		</div>
	);
}

export default App;
