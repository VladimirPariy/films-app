import React, {FC} from "react";
import styles from './App.module.scss';

import Sidebar from "./Layout/Sidebar/Sidebar";
import Content from "./Layout/Content/Content";

const App: FC = () => {
	return (
		<main className={styles.wrapper}>
			<Sidebar/>
			<Content/>
		</main>
	);
}

export default App;
