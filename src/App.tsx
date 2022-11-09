import React, {FC, useEffect} from "react";
import styles from './App.module.scss';


import Main from "./Layout/main/Main";
import Sidebar from "./Layout/sidebar/Sidebar";

import {loadFilms} from "./Feature/FilmsList/FilmsSlice";
import {useAppDispatch} from "./Store/storeTypes";

const App: FC = () => {
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		dispatch(loadFilms({page: 1, category: 'popular'}))
	}, [])
	
	
	return (
		<div className={styles.wrapper}>
			<Sidebar/>
			<Main/>
		</div>
	);
}

export default App;
