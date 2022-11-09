import React, {FC, useEffect} from "react";
import styles from './App.module.scss';


import Main from "./Layout/main/Main";
import Sidebar from "./Layout/sidebar/Sidebar";

import {loadFilms} from "./Feature/FetchedFilms/FilmsSlice";
import {useAppDispatch} from "./Store/reduxTypes";

const App: FC = () => {
	const dispatch = useAppDispatch()
	// 'popular', process.env.REACT_APP_API_KEY || '', 1
	// const f = async () => {
	// 	console.log(await getFilms('popular', '5544770752199f4dbbbbebdebba5cdad', 1))
	// }
	// const data = f()
	useEffect(() => {
		dispatch(loadFilms({page: 1, category: 'popular'}))
	}, [])
	
	// console.log(data)
	return (
		<div className={styles.wrapper}>
			<Sidebar/>
			<Main/>
		</div>
	);
}

export default App;
